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
    search: "",
    gender: "",
    isAlive: "",
    type: "",
  });

  const onFilterChange = (event) => {
    let filterType = event.target.dataset.type;

    // switch (filterType) {
    //   case 'search':
    //     setFilter({
    //       search: event.target.value,
    //     })
    //     break;
    //   case 'gender':
    //     setFilter({
    //       gender: event.target.innerHTML
    //     })
    //     break;
    //   default:
    //     break;
    // }
  };

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("1:", response)
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
                <Header />
                <div>
                  <Filter
                    filter={filter}
                    setFilter={setFilter}
                    type="search"
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
          console.log(renderProps)
          return (
            <CharacterDetail
              {...renderProps}
              character={character}
            />
          );
        }}
      />
    </Router>
  );
}

function deleteSpace(str) {
  return str.split(" ").join("");
}
