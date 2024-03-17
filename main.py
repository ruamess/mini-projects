import re
from fastapi import FastAPI, HTTPException
from pytube import YouTube
import os

app = FastAPI()


def get_downloads_folder():
    return os.path.join(os.path.expanduser("~"), "Downloads")


def is_youtube_link(link):
    youtube_regex = (
        r"(https?://)?(www\.)?"
        "(youtube|youtu|youtube-nocookie)\.(com|be)/"
        "(watch\?v=|embed/|v/|.+\?v=)?([^&=%\?]{11})"
    )
    return re.match(youtube_regex, link)


@app.post("/download_video/")
async def download_video(link: str, permission: str = "720p"):
    try:
        if not is_youtube_link(link):
            raise HTTPException(status_code=400, detail="Ссылка не является ссылкой на YouTube видео")

        yt = YouTube(link)
        video_title = yt.title
        video_length = yt.length
        thumbnail_url = yt.thumbnail_url

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

        download_dir = get_downloads_folder()
        file_path = selected_stream.download(output_path=download_dir)
        return {
            "name": video_title,
            "time": video_length,
            "thumbnail_url": thumbnail_url,
            "file_path": file_path
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to download video: {str(e)}")
