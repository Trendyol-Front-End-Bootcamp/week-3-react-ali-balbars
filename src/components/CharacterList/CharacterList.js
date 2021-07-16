import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './character-list.css';
import CharacterCard from "../CharacterCard/CharacterCard.js";

export default function CharacterList(props) {
    const [filteredCharactes, setFilteredCharactes] = useState([])
    const { filter } = props;
    useEffect(() => {
        // fetch(generateUrl()).then(response => response.json())
        //     .then(data => setFilteredCharactes(data.results))

        fetch(generateUrl()).
            then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }
            }).then(data => {
                console.log('data', data);
                setFilteredCharactes(data.results) 
            }
            ).catch(error => {
                console.log('catch');
                goNoResultPage();
            })
        // .then(data => setFilteredCharactes(data.results))

        console.log(generateUrl());
        console.log(filteredCharactes);


    }, [filter.gender, filter.species, filter.aliveness])

    const generateUrl = () => {
        let url = `https://rickandmortyapi.com/api/character/?gender=${filter.gender ? filter.gender : ''}&species=${filter.species ? filter.species : ''}&status=${filter.aliveness ? filter.aliveness : ''}`;
        return url;
    }

    const history = useHistory();

    const goNoResultPage = () => {
        history.push('/no-result')
    }

    if (filteredCharactes == undefined) {
        console.log("dizi boş");
        goNoResultPage();
    } else {
    }

    return (
        <div className="CharacterList">
            {
                filteredCharactes?.filter(character => character.name.toLowerCase()
                    .includes(props.filter.search?.toLowerCase().trim()))
                    .map((character) => {
                        return (
                            <Link to={`character/${character.name.replace(/(\w+)\s(\w+)/, "$1-$2").toLowerCase()}`} className="CharacterLink"
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
