import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './character-list.css';
import CharacterCard from "../CharacterCard/CharacterCard.js";
import axios from 'axios';
import RickNotFoundImage from '../../img/rick-not-found.jpg';
import Rick from '../../img/rick.png';
import Morty from '../../img/morty.png';

export default function CharacterList(props) {
    const [filteredCharacters, setFilteredCharacters] = useState([])
    const { filter } = props;
    const [isLoading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {

        axios.get(generateUrl())
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    console.log('axios data', response.data.results);
                    setFilteredCharacters(response.data.results)
                    setLoading(false);

                } else {
                    throw Error(response.statusText);
                }
            }).catch(() => {
                goNoResultPage();
            });

    }, [filter.gender, filter.species, filter.aliveness])

    if (isLoading) {
        return <div className="CharacterList">
            Loading...
        </div>
    } else {

    }

    function generateUrl() {
        let url = `https://rickandmortyapi.com/api/character/?gender=${filter.gender ? filter.gender : ''}&species=${filter.species ? filter.species : ''}&status=${filter.aliveness ? filter.aliveness : ''}`;
        return url;
    }

    function goNoResultPage() {
        history.push('/no-result')
    }


    if (filteredCharacters == undefined) {
        goNoResultPage();
    }

    function getSearchFilteredCharacters(filteredCharacters) {
        return filteredCharacters.filter(character => character.name.toLowerCase()
            .includes(props.filter.search?.toLowerCase().trim()))
    }

    if (getSearchFilteredCharacters(filteredCharacters).length === 0) {
        console.log('characterlist boş');
        return (
            <div className="not-found">
                <span>Not Found</span>
                <img width={200} src={RickNotFoundImage} alt="" />
            </div>
        );
    }

    return (
        <div className="CharacterList">
            <img height={400} src={Rick} alt="Rick" className="img-rick"/>
            <img height={400} src={Morty} alt="Morty" className="img-morty"/>
            {
                getSearchFilteredCharacters(filteredCharacters)
                    .map((character) => {
                        return (

                            <Link to={`character/${character.name.split(' ').join('-').toLowerCase()}`} className="CharacterLink"
                                key={character.id}
                                style={{ textDecoration: 'none', color: 'black' }}>
                                <CharacterCard character={character} />
                            </Link>
                        );
                    })
            }
        </div>
    );
}
