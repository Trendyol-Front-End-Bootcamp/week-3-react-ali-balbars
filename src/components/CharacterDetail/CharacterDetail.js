import React, { useEffect, useState } from "react";
import CharacterCard from '../CharacterCard/CharacterCard';
import Header from '../Header/Header.js';
import ButtonBack from '../ButtonBack/ButtonBack';
import './character-detail.css';
import axios from 'axios';

export default function CharacterDetail(props) {
  let episodeNames = [];
  let linkName = '';
  const baseApiUrl = 'https://rickandmortyapi.com/api/character/?name=';
  const characterName = formatLinkName(props.match.params.name);
  const [character, setCharacter] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(baseApiUrl + characterName)
      .then(response => {
        setCharacter(response.data.results[0]);
        setLoading(false);

      })
    // getLastEpisodes(5).map((episodeUrl) => {
    //   fetch(episodeUrl)
    //     .then(response => response.json())
    //     .then(data => lastEpisodes.push(data.name))
    // })


  }, [])

  if (isLoading) {
    return <div></div>
  } else {
    // console.log('episodes', character.episode.slice(-5));
    // console.log('bbb', getEpisodeNames(getLastEpisodeUrls(5)));
    episodeNames = getEpisodeNames(getLastEpisodeUrls(5));
    console.log('episode Names', episodeNames);
  }


  function formatLinkName(str) {
    let splittedArray = str.split('-');
    let capitalized = splittedArray.map((e) => capitalize(e));
    return capitalized.join(' ');
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function getEpisodeNames(urlArray) {
    let array = [];
    urlArray.map((episodeUrl) => {
      axios.get(episodeUrl)
        .then(response => {
          // return `${response.data.id}- ${response.data.name}`;
          array.push(`${response.data.id}- ${response.data.name}`);
        })
    })
    return array;
  }

  function getLastEpisodeUrls(count) {
    return character.episode.slice(-count);
  }

  return (
    <div className="container">
      <Header />
      <div className="character-detail">
        <CharacterCard character={character} episodeNames={episodeNames} />
        <ButtonBack className="btn-back" />
      </div>
    </div>
  );
};

