import "./App.css";
import { useState } from "react";

import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handleClickBefore = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <section>
      <div>
        {pokemonIndex > 0 ? (
          <button type="button" onClick={handleClickBefore}>
            Précédent
          </button>
        ) : (
          ""
        )}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button type="button" onClick={handleClickNext}>
            Suivant
          </button>
        ) : (
          ""
        )}

        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </section>
  );
}
//Dans le composant App, crée un state
//pokemonIndex en utilisant un état (useState).
// Initialise ce state à 0.
export default App;
