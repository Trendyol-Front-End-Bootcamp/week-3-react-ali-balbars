import { useEffect } from 'react';
import './character-card.css';

export default function CharacterCard(props) {
  const { character } = props;
  let episodeNames = [];
  // console.log("episodes ", episodeNames);
  // props.episodes?.map((episode) => console.log(episode.name))

  useEffect(() => {
    episodeNames = props.episodes;
  }, [])

  return (

    <div className={`card ${character.gender == 'Male' ? 'green' : ''}`}>
      <div className="additional">
        <div className="user-card">
          <div className="level center">
            {character.gender}
          </div>
          <div className="points center">
            {character.status}
          </div>
          <img width="110" height="110" src={character.image} alt={`${character.name} image`} />

        </div>
        <div className="more-info">
          <h1>{character.name}</h1>
          <ul>
            <li>Type: {character.species || 'Unknown'}</li>
            <li>Location: {character.location.name || 'Unknown'}</li>
          </ul>

        </div>

      </div>
      <div className="general">

        <h1>{character.name}</h1>
        <ul>
          <li>Type: {character.species || 'Unknown'}</li>
          <li>Location: {character.location.name || 'Unknown'}</li>
          
        </ul>

        <ul>
          {props.episodes?.map((episode) => <li>{episode}</li>)}
        </ul>

        <span className="more">Click the card for more info</span>

      </div>

    </div>
  );
}
