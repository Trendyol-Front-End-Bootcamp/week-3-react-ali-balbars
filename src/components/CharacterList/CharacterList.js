import React from "react";
import { Link } from "react-router-dom";
import './character-list.css';
import CharacterCard from "../CharacterCard/CharacterCard.js";

export default function CharacterList(props) {
    return (
        <div className="CharacterList">
            {props.characters
                .filter(character => character.name.toLowerCase()
                .includes(props.filter.search?.toLowerCase().trim()))
                .map((character) => {
                    return (
                        <Link to={`character/${character.name}`} className="CharacterLink"
                        key={character.name}
                        style={{textDecoration: 'none', color: 'black'}}>
                            <CharacterCard character={character}/>
                        </Link>
                    );
                })}
        </div>
    );
}
