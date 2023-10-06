import type { Pokemon, Type } from "pokenode-ts";
import Image from "next/image";

export default async function Home({ params }: { params: { type: string } }) {
  const pokemons = await fetch(
    `https://pokeapi.co/api/v2/type/${params.type}?limit=25`
  );
  const mon: Type = await pokemons.json();
  const pokeArr: Pokemon[] = [];

  for (let index = 0; index < mon.pokemon.length; index++) {
    const poke = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${mon.pokemon[index].pokemon.name}`
    );
    const pokemon: Pokemon = await poke.json();
    pokeArr.push(pokemon);
  }

  return (
  <div className="flex flex-col items-center py-10">
    <main className="grid grid-cols-1 sm:grid-cols-3 gap-28">
      {pokeArr.map((mon, index) => (
        <div key={index} className="w-fit">
          <h2 className="text-center text-lg uppercase">{mon.name}</h2>
          <Image
            src={mon.sprites.other?.["official-artwork"].front_default ?? ""}
            alt={mon.name}
            width={200}
            height={200}
            className="w-60 h-60"
          />
        </div>
      ))}
    </main>
    </div>
  );
}
