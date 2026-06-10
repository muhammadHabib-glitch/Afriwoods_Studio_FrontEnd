import { CHARACTERS, type CharacterUniverse } from "@/lib/constants";

export type Character = (typeof CHARACTERS)[number];

export { CHARACTERS, type CharacterUniverse };

export function getCharacterBySlug(slug: string): Character | undefined {
  return CHARACTERS.find((c) => c.slug === slug);
}