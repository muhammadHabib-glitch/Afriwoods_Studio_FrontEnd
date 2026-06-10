import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CharacterPage from "@/components/universe/CharacterPage";
import { CHARACTERS, getCharacterBySlug } from "@/lib/characters";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CHARACTERS.map((character) => ({ slug: character.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  if (!character) return { title: "Character Not Found" };
  return {
    title: character.name,
    description: character.bio,
  };
}

export default async function CharacterDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  if (!character) notFound();
  return <CharacterPage character={character} />;
}