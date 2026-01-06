import os
import uuid
from openai import OpenAI
from PIL import Image
import requests
from io import BytesIO

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

OUTPUT_DIR = "generated_images"
os.makedirs(OUTPUT_DIR, exist_ok=True)


def generate_coloring_image(prompt: str) -> str:
    response = client.images.generate(
        model="gpt-image-1",
        prompt=prompt,
        size="1024x1024"
    )

    image_url = response.data[0].url

    # Download image
    img_data = requests.get(image_url).content
    image = Image.open(BytesIO(img_data)).convert("RGB")

    filename = f"{uuid.uuid4()}.png"
    filepath = os.path.join(OUTPUT_DIR, filename)
    image.save(filepath, "PNG")

    return filepath
