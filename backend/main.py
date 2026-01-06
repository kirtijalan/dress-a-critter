from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models.schemas import GenerateRequest, PromptResponse, ImageResponse

from ai.prompt_builder import build_prompt

from ai.image_generator import generate_coloring_image

from fastapi.staticfiles import StaticFiles

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


@app.post("/generate-image", response_model=ImageResponse)
def generate_image(payload: GenerateRequest):
    prompt = build_prompt(payload.animal, payload.outfit)
    image_path = generate_coloring_image(prompt)

    return {
        "image_url": f"http://127.0.0.1:8000/{image_path}"
    }


app.mount(
    "/generated_images",
    StaticFiles(directory="generated_images"),
    name="generated_images"
)

