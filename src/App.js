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
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response.results);
        setCharacters(response.results);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        {/* 

      */}
        <Header>
          <Filter />
        </Header>

        

        <Route
          path="/"
          exact
          render={() => {
            {
              return <CharacterList characters={characters}/>
              // return characters.map((character) => {
              //   return (
              //     <Link to={`character/${character.name}`}>
              //       <CharacterCard
              //         key={character.name}
              //         character={character}
              //       />
              //     </Link>
              //   );
              // });
            }
          }}
        ></Route>

        {/* <Route path="/character/:name" component={CharacterDetail} /> */}

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
