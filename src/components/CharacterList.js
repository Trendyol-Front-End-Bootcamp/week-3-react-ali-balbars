import React from "react";
import { Link } from "react-router-dom";
import '../css/character-list.css';

export default function CharacterList(props) {
    return (
        <div className="CharacterList">
            {props.characters
                .filter(character => character.name.toLowerCase()
                .includes(props.filter.search.toLowerCase().trim()))
                .map((character) => {
                    return (
                        <Link to={`character/${character.name}`} key={character.name}>
                            <div>
                                <img width="200" src={character.image} alt={`${character.name} image`} />
                                <div>{'Name: ' + character.name}</div>
                                <div>{'Gender: ' + character.gender}</div>
                                <div>{'Type: ' + (character.type || 'unknown')}</div>
                                <div>{'Status: ' + character.status}</div>
                            </div>
                        </Link>
                    );
                })}
        </div>
    );
}
