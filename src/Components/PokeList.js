import React from 'react';
import Pokemon from './Pokemon';
import '../Stylesheet/pokemonList.css';

const PokeList = (props) => {
  const eachPokemon = props.List.map((pokemon, index) => {
    if (props.favList.includes(pokemon)) {
      return (
        <li className="poke-boxes" key={pokemon.id}>
          <Pokemon
            classN="favorito"
            index={index}
            name={pokemon.name}
            url={pokemon.url}
            types={pokemon.types}
            handleFavorite={props.handleFavorite}
          />
        </li>
      );
    } else {
      return (
        <li className="poke-boxes" key={pokemon.id}>
          <Pokemon
            classN=""
            index={index}
            name={pokemon.name}
            url={pokemon.url}
            types={pokemon.types}
            handleFavorite={props.handleFavorite}
          />
        </li>
      );
    }
  });
  return <ul className="poke-boxes-container">{eachPokemon}</ul>;
};

export default PokeList;
