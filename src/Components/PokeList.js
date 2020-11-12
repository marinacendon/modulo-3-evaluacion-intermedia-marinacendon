import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {
  render() {
    const eachPokemon = this.props.List.map((pokemon) => {
      return <Pokemon name={pokemon.name} url={pokemon.url} types={pokemon.types} />;
    });
    // console.log(this.props.List);
    // const types = this.props.List.types.map((pokemon) => {
    //   return <Pokemon type={pokemon.type}></Pokemon>;
    // });

    return (
      <div>
        PokeList
        {eachPokemon}
        {/* {types} */}
      </div>
    );
  }
}

export default PokeList;
