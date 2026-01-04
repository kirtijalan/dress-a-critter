import { Animal, Outfit } from "@/types/domain";

export const ANIMALS: { value: Animal; label: string }[] = [
  { value: "panda", label: "🐼 Panda" },
  { value: "dinosaur", label: "🦖 Dinosaur" },
  { value: "cat", label: "🐱 Cat" },
  { value: "dog", label: "🐶 Dog" },
  { value: "bunny", label: "🐰 Bunny" },
  { value: "lion", label: "🦁 Lion" },
];

export const OUTFITS: { value: Outfit; label: string }[] = [
  { value: "princess", label: "👑 Princess" },
  { value: "astronaut", label: "🚀 Astronaut" },
  { value: "firefighter", label: "🚒 Firefighter" },
  { value: "ballet_dancer", label: "🩰 Ballet Dancer" },
  { value: "superhero", label: "🦸 Superhero" },
  { value: "doctor", label: "🩺 Doctor" },
];
