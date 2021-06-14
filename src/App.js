import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState ([]);

  const onClickHandler = () =>{
    console.log("calling API...");

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        let results = response.data.results.map( p => p.name)
        setPokemon(results)
      })
      .catch(err => console.log(err))
  }
  

  return (
    <div className="container">
      <h1>Pokemon: Catch Them All!</h1>
      <div className="button-row">
        <button onClick={()=>onClickHandler()} >Fetch Pokemon!</button>
      </div>
      <ul>
        {
          pokemon.map((item, i) => {
            return <li key={i}> {item } </li>
          })   
        }
      </ul>


    </div>
  );
}

export default App;
