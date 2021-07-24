import React, { useEffect, useState } from "react";
import CharacterCard from '../CharacterCard/CharacterCard';
import Header from '../Header/Header.js';
import ButtonBack from '../ButtonBack/ButtonBack';
import './character-detail.css';
import axios from 'axios';

export default function CharacterDetail(props) {
  const BASE_API_URL = 'https://rickandmortyapi.com/api/character/?name=';
  const characterName = getFormattedName(props.match.params.name);
  console.log(characterName);
  const [character, setCharacter] = useState({});
  const [lastEpisodesNames, setLastEpisodesNames] = useState([]);

  useEffect(() => {
    console.log("useEffect çalıştı")
    axios.get(BASE_API_URL + characterName)
      .then((response) => {
        setCharacter(response.data.results[0]);
        return response.data.results[0];
      }).then(chr =>
        chr.episode.reverse()
          .map((link) => Number(link.match(/\d+/)[0]))
          .slice(0, 5)
      ).then(characterEpisodeIDs => fetch(
        `https://rickandmortyapi.com/api/episode/${characterEpisodeIDs.join()}`
      )).then((response2) => response2.json()).then((data) =>
        Array.isArray(data) ? data.sort((a, b) => a - b).reverse() : Array(data)
      )
      .then((chrLastEpisodes) => {
        console.log(chrLastEpisodes.map(episode => episode.name))
        setLastEpisodesNames(chrLastEpisodes.map(episode => episode.name))
      });
  }, [])

  function getFormattedName(linkName) {
    let splitted = linkName.split('-');
    let capitalized = splitted.map(e => capitalize(e));
    return capitalized.join(' ');
  }

  function capitalize(str) {
    let capitalized = str[0].toUpperCase() + str.slice(1);
    return capitalized;
  }

  return (
    <div className="container">
      <Header />
      <div className="character-detail">
        <CharacterCard character={character} episodeNames={lastEpisodesNames} />
        <ButtonBack className="btn-back" />
      </div>
    </div>
  );
};

