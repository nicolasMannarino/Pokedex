import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  //var cont = 0;
  /*const [cont, setCont] = useState(0);
  function devolverCont()
  {
    setCont(cont+1);
    console.log("Funcion Contador: " + cont);
  }
  console.log("Contador Afu: " + cont);
*/
const [pokemon, setPokemon] = useState();

useEffect(() => {
  getPokemon(151);
}, []);

async function getPokemon(idPokemon)
{
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;
    const response = await fetch(urlPokemon);
    const datosPokemon = await response.json();
    setPokemon(datosPokemon);
    console.log(datosPokemon);

    //return datosPokemon;  
}

  return (
    <div className="App">
      {/* <h1>contador: {cont}</h1>
      <button onClick = {devolverCont}>Aumentar Contador</button> */}
      
      {pokemon
        ?<div><img src={pokemon.sprites.front_default}></img> 
        <h1 className='nombrePokemon'>{pokemon.name}</h1></div>
        :null}

      <button onClick={() => getPokemon(Math.floor(Math.random() * (700-1 + 1)) + 1)}>Pokemoncito</button>

    </div>
  );
}

export default App;
