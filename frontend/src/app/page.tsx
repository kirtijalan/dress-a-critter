"use client";

import { useState } from "react";
import { ANIMALS, OUTFITS } from "@/constants/options";
import { Animal, Outfit } from "@/types/domain";
import { generatePrompt } from "@/lib/api";


export default function Home() {
  const [animal, setAnimal] = useState<Animal | "">("");
  const [outfit, setOutfit] = useState<Outfit | "">("");

  const canGenerate = animal && outfit;

  const [prompt, setPrompt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
  if (!animal || !outfit) return;

  setLoading(true);
  setPrompt(null);

  try {
    const result = await generatePrompt(animal, outfit);
    setPrompt(result);
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
      <main className="w-full max-w-3xl px-6 py-24 bg-white dark:bg-zinc-950 rounded-xl shadow-sm">
        <div className="flex flex-col gap-10">
          <header className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Dress-a-Critter 🐾
            </h1>
            <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
              Create printable coloring pages by dressing animals in fun outfits.
            </p>
          </header>

          <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Choose an animal</label>
              <select
                value={animal}
                onChange={(e) => setAnimal(e.target.value as Animal)}
                className="h-12 rounded-md border px-3"
              >
                <option value="">Select an animal</option>
                {ANIMALS.map((a) => (
                  <option key={a.value} value={a.value}>
                    {a.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Choose an outfit</label>
              <select
                value={outfit}
                onChange={(e) => setOutfit(e.target.value as Outfit)}
                className="h-12 rounded-md border px-3"
              >
                <option value="">Select an outfit</option>
                {OUTFITS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            
            <button
              onClick={handleGenerate}
              disabled={!canGenerate || loading}
              className={`mt-4 h-12 rounded-md font-medium transition ${
                canGenerate && !loading
                ? "bg-zinc-900 text-white hover:bg-zinc-800"
                : "bg-zinc-300 text-zinc-500 cursor-not-allowed"
              }`}
            >
              {loading ? "Generating..." : "Generate coloring page"}
            </button>
          </section>

          <section className="rounded-lg border p-4 text-sm whitespace-pre-wrap text-zinc-700 dark:text-zinc-300">
            {prompt ? prompt : "Prompt preview will appear here"}
          </section>

        </div>
      </main>
    </div>
  );
}
