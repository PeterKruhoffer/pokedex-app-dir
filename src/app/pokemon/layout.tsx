import type { NamedAPIResourceList } from "pokenode-ts";
import NextLink from "next/link";

export default async function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon");
  const mon: NamedAPIResourceList = await pokemons.json();
  return (
    <div className="min-h-screen p-4">
      <nav className="sticky top-0 left-0 py-4 px-8 backdrop-blur w-full flex justify-between">
        <NextLink href="/">Home</NextLink>
        <NextLink href="/pokemon">Pokemon</NextLink>
      </nav>
      <div className="flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
}
