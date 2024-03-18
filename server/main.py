import os
import asyncio
from fastapi import FastAPI, HTTPException
from pytube import YouTube
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from helpers import (is_youtube_link,
                     get_video_folder,
                     delete_file_after_delay)

app = FastAPI()


@app.get("/get_video_info/")
async def get_video_info(url: str):
    try:
        yt = YouTube(url)
        video_title = yt.title
        video_length = yt.length

        thumbnail_url = yt.thumbnail_url

        return {
            "video_title": video_title,
            "video_length": video_length,
            "thumbnail_url": thumbnail_url
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get video info: {str(e)}")


@app.post("/download_video/")
async def download_video(link: str, permission: str):
    try:
        if not is_youtube_link(link):
            raise HTTPException(status_code=400, detail="Ссылка не является ссылкой на YouTube видео")

        yt = YouTube(link)
        streams = yt.streams.filter(progressive=True)

        selected_stream = None
        for stream in streams:
            if stream.resolution == permission:
                selected_stream = stream
                break

        if not selected_stream:
            available_resolutions = [stream.resolution for stream in streams]
            raise HTTPException(status_code=400,
                                detail=f"Выбранное разрешение недоступно. Доступные разрешения: {', '.join(available_resolutions)}")

        video_folder = get_video_folder()
        file_path = selected_stream.download(output_path=video_folder)

        asyncio.create_task(delete_file_after_delay(file_path, 60))

        return {"status": "success"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to download video: {str(e)}")


@app.get("/get_video_link/{filename}")
async def get_video_link(filename: str):
    try:
        filepath = os.path.join(get_video_folder(), filename)
        if not os.path.exists(filepath):
            raise HTTPException(status_code=404, detail="File not found")

        return FileResponse(filepath, media_type='video/mp4', filename=filename)

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate video URL: {str(e)}")


app.mount("/video", StaticFiles(directory=get_video_folder()), name="video")
