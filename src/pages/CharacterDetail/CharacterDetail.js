import React, { useEffect, useState } from "react";
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Header from '../../components/Header/Header.js';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import './character-detail.css';
import axios from 'axios';

export default function CharacterDetail(props) {
  const BASE_API_URL = 'https://rickandmortyapi.com/api/character/?name=';
  const characterName = getFormattedName(props.match.params.name);
  const [character, setCharacter] = useState({});
  const [lastEpisodesNames, setLastEpisodesNames] = useState([]);

  useEffect(() => {
    axios.get(BASE_API_URL + characterName)
      .then((response) => {
        setCharacter(response.data.results[0]);
        return response.data.results[0];
      })
      .then(character =>
        extractEpidoseIdsFromUrls(5, character.episode.reverse())
      )
      .then(characterEpisodeIDs => fetch(
        `https://rickandmortyapi.com/api/episode/${characterEpisodeIDs.join()}`
      ))
      .then(response2 => response2.json())
      .then(data =>
        sortArrayDesc(data)
      )
      .then((chrLastEpisodes) => {
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

  function sortArrayDesc(array) {
    if (!Array.isArray(array)) {
      return Array(array);
    }

    let arrayCopy = array.slice();
    return arrayCopy.sort((a, b) => b - a);
  }

  function extractEpidoseIdsFromUrls(count, urlArray) {
    const episodeIds = urlArray.map
      (episodeUrl =>
        Number(episodeUrl.match(/\d+/)[0])
      ).slice(0, count);

    return episodeIds;
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

