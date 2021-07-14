import "./css/styles.css";
import React, { useEffect, useState, useRef } from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import CharacterList from "./components/CharacterList/CharacterList.js";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import Dropdown from "./components/DropDown/Dropdown";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


export default function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({
    search: '',
    gender: '',
    isAlive: '',
    type: '',
  });


  console.log('filter => ', filter);

  const onFilterChange = (event) => {
    console.log(event.target.dataset.type);
    let filterType = event.target.dataset.type;


    switch (filterType) {
      case 'search':
        setFilter({
          search: event.target.value,
        })
        break;
      case 'gender':
        setFilter({
          gender: event.target.innerHTML
        })
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCharacters(response.results);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Filter filter={filter} onFilterChange={onFilterChange} type="search">
          
        </Filter> */}
        <Filter filter={filter} setFilter={setFilter} type="search">

        </Filter>

        <Route
          path="/"
          exact
          render={() => {
            {
              return <CharacterList characters={characters} filter={filter} />
            }
          }}
        ></Route>


        <Route
          path="/character/:name"
          render={(renderProps) => {
            const character = characters.find(
              (character) => character.name === renderProps.match.params.name
            );
            return <CharacterDetail {...renderProps} character={character} />;
          }}
        ></Route>

      </div>
    </Router>
  );
}

function deleteSpace(str) {
  return str.split(' ').join('');
}

