import type { Pokemon, NamedAPIResourceList, Type } from "pokenode-ts";
import Image from "next/image";
import { Fragment } from "react";

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
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {pokeArr.map((mon, index) => (
        <Fragment key={index}>
          <h2>{mon.name}</h2>
          <Image
            src={mon.sprites.front_default ?? ""}
            alt={mon.name}
            width={200}
            height={200}
            className="w-80 h-80"
            style={{ imageRendering: "pixelated" }}
          />
        </Fragment>
      ))}
    </main>
  );
}
