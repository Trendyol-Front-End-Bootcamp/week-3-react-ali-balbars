import React, { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Header from "../../components/Header/Header.js";
import ButtonBack from "../../components/ButtonBack/ButtonBack";
import "./character-detail.css";
import axios from "axios";

export default function CharacterDetail(props) {
    const BASE_API_URL = "https://rickandmortyapi.com/api/character/?name=";
    const characterName = getFormattedName(props.match.params.name);
    const [character, setCharacter] = useState({});
    const [lastEpisodeNames, setLastEpisodeNames] = useState([]);

    useEffect(async () => {
        const character = await getCharacter();
        await setCharacter(character);
        const lastEpisodeUrls = character.episode.slice(-5);

        let promise = Promise.all(
            lastEpisodeUrls.map((episode) =>
                axios.get(episode).then((response) => response.data.name)
            )
        );
        setLastEpisodeNames(await promise);
    }, []);

    async function getCharacter() {
        let character;
        await axios.get(BASE_API_URL + characterName).then((response) => {
            character = response.data.results[0];
        });
        return character;
    }

    function getFormattedName(linkName) {
        let splitted = linkName.split("-");
        let capitalized = splitted.map((e) => capitalize(e));
        return capitalized.join(" ");
    }

    function capitalize(str) {
        let capitalized = str[0].toUpperCase() + str.slice(1);
        return capitalized;
    }

    return (
        <div className="container">
            <Header />
            <div className="character-detail">
                <CharacterCard
                    character={character}
                    episodeNames={lastEpisodeNames}
                />
                <ButtonBack className="btn-back" />
            </div>
        </div>
    );
}
