import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
} from "react-router-dom";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterDetail = (props) => {
    const params = useParams();
    // console.log("match", match);
    // console.log("params", params);
    console.log("props", props);

    const handleClick = () => {
      props.history.goBack();
    }
    return (
    <div className="character-detail">
      <CharacterCard character={props.character}/>
      <button onClick={handleClick}>Geri Dön</button>
    </div>);
};

export default CharacterDetail;
