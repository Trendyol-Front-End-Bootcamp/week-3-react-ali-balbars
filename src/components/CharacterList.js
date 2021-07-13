import React from "react";
import { Link } from "react-router-dom";
import '../css/character-list.css';

export default function CharacterList(props) {
    console.log(props.characters);
    return (
        <div className="CharacterList">
            {props.characters.map((character) => {
                return (
                    <Link to={`character/${character.name}`}>
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
