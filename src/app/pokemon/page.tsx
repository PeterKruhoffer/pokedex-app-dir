import type { Pokemon, NamedAPIResourceList } from "pokenode-ts";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";

const types = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "dragon",
  "ice",
  "dark",
  "fairy",
  "psychic",
];

export default async function Home() {
  const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon");
  const mon: NamedAPIResourceList = await pokemons.json();
  const pokeArr: Pokemon[] = [];

  for (let index = 0; index < mon.results.length; index++) {
    const poke = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${mon.results[index].name}`
    );
    const pokemon: Pokemon = await poke.json();
    pokeArr.push(pokemon);
  }

  return (
    <main className="min-h-screen p-4">
      <div className="grid grid-cols-6 grid-flow-row gap-4 pb-10">
        {types.map((type, index) => (
          <Fragment key={index}>
            <Link
              href={`/pokemon/${type}`}
              className="py-2 px-4 text-slate-200 rounded-xl border-2 text-center"
            >
              {type}
            </Link>
          </Fragment>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-24">
        {pokeArr.map((mon, index) => (
          <Fragment key={index}>
            <div>
              <h2 className="text-center text-slate-200 text-lg">{mon.name}</h2>
              <Image
                src={mon.sprites.other?.["official-artwork"].front_default ?? ""}
                alt={mon.name}
                width={200}
                height={200}
                className="w-60 h-60"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </Fragment>
        ))}
      </div>
    </main>
  );
}
