import React, { useState } from 'react';
import List from '../Data/List.json';
import PokeList from './PokeList';
import '../Stylesheet/App.css';

const myFavPokes = [];

function App() {
  // Lista completa (no uso setList por que no lo utilizaré)
  const [list] = useState(List);
  // Lista fav
  const [favList, setfav] = useState([]);

  const handleFavorite = (pokeIndex) => {
    // const favoritesPoke = [...favList, pokeIndex];
    const favoritesPoke = list[pokeIndex];
    if (myFavPokes.indexOf(favoritesPoke) === -1) {
      myFavPokes.push(favoritesPoke);
    } else {
      const pokeIndex = myFavPokes.indexOf(favoritesPoke);
      console.log(pokeIndex);
      myFavPokes.splice(pokeIndex, 1);
    }
    // fav.push(name);
    // setfav(fav);
    // ***Es lo mismo que push

    // Ciudades linkedin--------------------------
    // const nuevaFav = [...fav, name];
    // setfav(nuevaFav);
    setfav(myFavPokes);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Lista de Pokemons</h1>
      </header>
      <main className="mainContainer">
        <PokeList
          className="pokemons"
          List={list}
          favList={favList}
          handleFavorite={handleFavorite}
        ></PokeList>
      </main>
    </div>
  );
}

export default App;
