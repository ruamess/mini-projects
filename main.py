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
async def download_video(link: str):
    try:
        if not is_youtube_link(link):
            raise HTTPException(status_code=400, detail="Ссылка не является ссылкой на YouTube видео")

        yt = YouTube(link)
        stream = yt.streams.first()
        download_dir = get_downloads_folder()
        stream.download(output_path=download_dir)
        return {"message": f"Видео успешно загружено в {download_dir}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to download video: {str(e)}")
