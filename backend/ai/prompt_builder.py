from models.domain import Animal, Outfit


def build_prompt(animal: Animal, outfit: Outfit) -> str:
    animal_text = animal.value.replace("_", " ")
    outfit_text = outfit.value.replace("_", " ")

    prompt = f"""
Create a black and white coloring book style illustration.

Subject:
A {animal_text} dressed as a {outfit_text}.

Style requirements:
- Clean line art
- Thick, bold outlines
- No shading or gradients
- No text in the image
- Simple, minimal background

Audience:
Children ages 4 to 7.

The illustration should be friendly, cute, and easy to color.
""".strip()

    return prompt
