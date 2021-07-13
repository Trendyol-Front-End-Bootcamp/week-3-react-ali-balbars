import "./css/styles.css";
import React, { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import Filter from "./components/Filter";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


export default function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({search: ''});

  const onFilterChange = (event) => {
    setFilter({search: event.target.value});
  }

  console.log(filter.search);

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
        <Filter filter={filter} onFilterChange={onFilterChange}/>

        <Route
          path="/"
          exact
          render={() => {
            {
              return <CharacterList characters={characters} filter={filter}/>
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

