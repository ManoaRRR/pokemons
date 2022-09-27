import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
  
  const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);// variable d'état avec un type de tableau de pokemon, initié a un tableau vide
  
  
  //equivalent de componentDidMount 
  useEffect(() => { //methode pour cycle de vie d'un composant 
    setPokemons(POKEMONS);//insertion dans la variable setPokemons 
  }, []);
  
  return ( //le code jsx , utilise le framework MATERIALIZE
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row"> 
          {pokemons.map(pokemon => (//lister les éléments dans un tableau
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))}
        </div>
      </div>
    </div> 
  );
}
  
export default PokemonList;
