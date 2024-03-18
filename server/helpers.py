import os
import re
import asyncio


def get_project_directory():
    return os.path.dirname(os.path.realpath(__file__))


def get_video_folder():
    return os.path.join(get_project_directory(), "video")


def is_youtube_link(link):
    youtube_regex = (
        r"(https?://)?(www\.)?"
        "(youtube|youtu|youtube-nocookie)\.(com|be)/"
        "(watch\?v=|embed/|v/|.+\?v=)?([^&=%\?]{11})"
    )
    return re.match(youtube_regex, link)


async def delete_file_after_delay(filepath, delay):
    await asyncio.sleep(delay)
    os.remove(filepath)
