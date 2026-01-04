from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.schemas import GenerateRequest, PromptResponse
from ai.prompt_builder import build_prompt

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dev only
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/prompt", response_model=PromptResponse)
def generate_prompt(payload: GenerateRequest):
    prompt = build_prompt(payload.animal, payload.outfit)
    return {"prompt": prompt}
