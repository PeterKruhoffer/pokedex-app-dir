import type { NamedAPIResourceList } from "pokenode-ts";

export default async function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon");
  const mon: NamedAPIResourceList = await pokemons.json();
  return <>{children}</>;
}
