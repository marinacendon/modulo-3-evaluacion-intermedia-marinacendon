import React from 'react';
import List from '../Data/List.json';
import PokeList from './PokeList';

import '../Stylesheet/App.css';

function App() {
  console.log(List);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Pokemons</h1>
        <PokeList List={List}></PokeList>
      </header>
    </div>
  );
}

export default App;
