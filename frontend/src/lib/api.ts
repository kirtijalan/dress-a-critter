import { Animal, Outfit } from "@/types/domain";

export async function generatePrompt(
  animal: Animal,
  outfit: Outfit
): Promise<string> {
  const res = await fetch("http://127.0.0.1:8000/prompt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ animal, outfit }),
  });

  if (!res.ok) {
    throw new Error("Failed to generate prompt");
  }

  const data = await res.json();
  return data.prompt;
}
