import React, { useEffect, useState } from "react";
import CharacterCard from '../CharacterCard/CharacterCard';
import Header from '../Header/Header.js';
import ButtonBack from '../ButtonBack/ButtonBack';
import './character-detail.css';

export default function CharacterDetail(props) {
  const lastEpisodes = [];
  useEffect(() => {

    getLastEpisodes(5).map((episode) => {
      fetch(episode)
        .then(response => response.json())
        .then(data => lastEpisodes.push(data.name))
    })
  }, [])

  const getLastEpisodes = (count) => {
    return props.character.episode.slice(-count);
  }

  return (
    <div className="container">
      <Header />
      <div className="character-detail">
        <CharacterCard character={props.character} episodes={lastEpisodes} />
        <ButtonBack className="btn-back" character={props.character} />
      </div>
    </div>);
};

