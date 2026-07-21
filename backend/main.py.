from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import yt_dlp
import re
import tempfile
import os
import glob
import webvtt

app = FastAPI(
    title="Jaguará YouTube Transcript API",
    description="Backend microservice using yt-dlp to extract YouTube transcripts",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TranscriptRequest(BaseModel):
    url: str
    lang: str = "pt"

class TranscriptResponse(BaseModel):
    title: str
    transcript: str
    language: str = "pt"
    segments: list[str] = []
    status: str = "success"
    provider: str = "yt-dlp Backend API"

@app.get("/")
def health_check():
    return {
        "status": "online",
        "service": "Jaguará YouTube Transcript Backend",
        "version": "1.0.0",
        "endpoints": ["POST /transcript", "POST /api/transcript"]
    }

@app.post("/transcript", response_model=TranscriptResponse)
@app.post("/api/transcript", response_model=TranscriptResponse)
def extract_transcript(req: TranscriptRequest):
    url = req.url.strip()
    if not url or ("youtube.com" not in url and "youtu.be" not in url):
        raise HTTPException(
            status_code=400,
            detail="URL do YouTube inválida ou em formato não suportado. Envie uma URL válida do YouTube."
        )

    with tempfile.TemporaryDirectory() as tmpdir:
        out_tmpl = os.path.join(tmpdir, "subtitle")
        ydl_opts = {
            'skip_download': True,
            'writesubtitles': True,
            'writeautomaticsub': True,
            'subtitlesformat': 'vtt/srt/best',
            'outtmpl': out_tmpl,
            'quiet': True,
            'no_warnings': True,
        }

        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                info = ydl.extract_info(url, download=True)
                title = info.get('title', 'Vídeo do YouTube')
        except yt_dlp.utils.DownloadError as e:
            msg = str(e)
            if "Private video" in msg:
                raise HTTPException(
                    status_code=403,
                    detail="Este vídeo é privado ou exige autenticação de conta no YouTube."
                )
            elif "Video unavailable" in msg:
                raise HTTPException(
                    status_code=404,
                    detail="O vídeo não foi encontrado no YouTube (pode ter sido removido ou não estar disponível na sua região)."
                )
            else:
                raise HTTPException(
                    status_code=502,
                    detail=f"O yt-dlp não conseguiu processar o vídeo: {msg}"
                )
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Erro de processamento interno no servidor backend: {str(e)}"
            )

        sub_files = glob.glob(os.path.join(tmpdir, "subtitle*"))
        if not sub_files:
            raise HTTPException(
                status_code=404,
                detail="O vídeo foi localizado, porém não possui legendas manuais nem legendas geradas automaticamente pelo YouTube."
            )

        transcript_lines = []
        for file_path in sub_files:
            if file_path.endswith('.vtt'):
                try:
                    for caption in webvtt.read(file_path):
                        clean_line = caption.text.strip()
                        if clean_line and clean_line not in transcript_lines:
                            transcript_lines.append(clean_line)
                except Exception:
                    pass
            elif file_path.endswith('.srt'):
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        lines = re.sub(r'\d+\n\d\d:\d\d:\d\d,\d\d\d --> \d\d:\d\d:\d\d,\d\d\d', '', content)
                        clean_lines = [l.strip() for l in lines.splitlines() if l.strip() and not l.strip().isdigit()]
                        for l in clean_lines:
                            if l not in transcript_lines:
                                transcript_lines.append(l)
                except Exception:
                    pass

        full_transcript = " ".join(transcript_lines).strip()

        if not full_transcript:
            raise HTTPException(
                status_code=404,
                detail="O arquivo de legenda do vídeo foi baixado, mas não contém texto legível."
            )

        return TranscriptResponse(
            title=title,
            transcript=full_transcript,
            language=req.lang or "pt",
            segments=transcript_lines,
            status="success",
            provider="yt-dlp Backend API"
        )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8080, reload=True)
