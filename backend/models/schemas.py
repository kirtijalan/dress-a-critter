from pydantic import BaseModel
from models.domain import Animal, Outfit


class GenerateRequest(BaseModel):
    animal: Animal
    outfit: Outfit


class PromptResponse(BaseModel):
    prompt: str
