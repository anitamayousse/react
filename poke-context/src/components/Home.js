import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1
}
function Home() {
    const [pokemon, setPokemon] = useState();
    const [randomPokemon , setRandomPokemon] = useState(1);
    const {isLogged} = useContext(UserContext);
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
    if (isLogged){
  return pokemon ?(
    <>
    <div className="bg-poke">
        <h4>You are logged in</h4>
        <p>ID:{pokemon.id}</p>
        <p>Name:{pokemon.name}</p>
        <p>Height:{pokemon.height}</p>
        <button onClick={handleClick}>get new</button>
    </div>
    </>
  ):(
    <p>Loading...</p>
  )
    }
  else{
    return(
      <Link  to="/login">
      <h1> Login </h1>
      </Link>
    
    )
  }
}

export default Home;
