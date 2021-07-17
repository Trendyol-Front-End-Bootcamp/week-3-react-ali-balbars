import "./css/styles.css";
import React, { useEffect, useState, useRef } from "react";
import CharacterList from "./components/CharacterList/CharacterList.js";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail.js";
import Filter from "./components/Filter/Filter.js";
import Header from "./components/Header/Header.js";
import NoResult from "./components/NoResult/NoResult.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({
    search: '',
    gender: '',
    aliveness: '',
    species: '',
  });

  const generateUrl = () => {
    let url = `https://rickandmortyapi.com/api/character/?gender=${filter.gender ? filter.gender : ''}&species=${filter.species ? filter.species : ''}&status=${filter.aliveness ? filter.aliveness : ''}`;
    return url;
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
      <Route
        path="/"
        exact
        render={() => {
          {
            return (
              <div className="App">
                <Header></Header>
                <div>
                  <Filter
                    filter={filter}
                    setFilter={setFilter}
                  />
                  <CharacterList
                    characters={characters}
                    filter={filter}
                  />
                </div>
              </div>
            );
          }
        }}
      />

      <Route
        path="/character/:name"
        render={(renderProps) => {
          const character = characters.find(
            (character) =>
              character.name.replace(/(\w+)\s(\w+)/, "$1-$2").toLowerCase() === renderProps.match.params.name
          );
          return (
            <CharacterDetail
              {...renderProps}
              character={character}
            />
          );
        }}
      />
      <Route
        path="/no-result"
        render={() => {
          return <NoResult filter={filter}
            setFilter={setFilter}
            generateUrl={generateUrl} />
        }}

      />
    </Router>
  );
}
