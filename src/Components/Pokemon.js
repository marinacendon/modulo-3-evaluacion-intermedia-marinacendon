import PropTypes from 'prop-types';
import React from 'react';
import '../Stylesheet/pokemon.css';

const Pokemon = (props) => {
  const pokeTypes = props.types.map((pokemonType, index) => {
    return <li key={index}>{pokemonType}</li>;
  });
  const handleClickFavorite = (ev) => {
    const pokeIndex = ev.currentTarget.id;
    props.handleFavorite(pokeIndex);
  };
  return (
    <article onClick={handleClickFavorite}>
      <img className="img" src={props.url} alt="Pokemon img" title={'Pokemon:' + props.name} />
      <h2 className="pokemonName">{props.name}</h2>
      <ul className="pokemonPowers">{pokeTypes}</ul>
    </article>
  );
};

Pokemon.defaultProps = {
  name: '?',
  url: '#',
  types: 'NA',
};

Pokemon.propTypes = {
  name: PropTypes.string,
  types: PropTypes.array,
  url: PropTypes.string,
  handleFavorite: PropTypes.func,
};
export default Pokemon;
