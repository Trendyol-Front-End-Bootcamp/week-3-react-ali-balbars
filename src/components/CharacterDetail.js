import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
} from "react-router-dom";

const CharacterDetail = (props) => {
    const params = useParams();
    // console.log("match", match);
    // console.log("params", params);
    console.log("props", props);

    const handleClick = () => {
      props.history.goBack();
    }
    return <div>
      <h1>{props.character.name}</h1>
      <button onClick={handleClick}>Geri Dön</button>
    </div>;
};

export default CharacterDetail;
