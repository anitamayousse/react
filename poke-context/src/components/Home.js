import { useState, useEffect } from "react";

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1
}
function Home() {
    const [pokemon, setPokemon] = useState();
    const [randomPokemon , setRandomPokemon] = useState(1);
    useEffect(() => {
      setTimeout(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
        .then(res => res.json())
        .then(res =>{
            setPokemon(res);
         })
         .catch((err) => {

         });
        }, 1000);
    }, [randomPokemon]);

    const handleClick = () => {
      setRandomPokemon(randomNumber());
    }
  return pokemon ? (
    <>
    <div className="bg-poke">
        <h4>You are logged in</h4>
        <p>ID:{pokemon.id}</p>
        <p>Name:{pokemon.name}</p>
        <p>Height:{pokemon.height}</p>
        <button onClick={handleClick}>get new</button>
    </div>
    </>
  ): (
    <p>Loading...</p>
  )
}

export default Home;
