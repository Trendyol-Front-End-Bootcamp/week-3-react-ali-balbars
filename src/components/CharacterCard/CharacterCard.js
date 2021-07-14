import './character-card.css';

export default function CharacterCard(props) {
  const { character } = props;

  return (

    <div className={`card ${character.gender == 'Male' ? 'green': ''}`}>
      <div className="additional">
        <div className="user-card">
          <div class="level center">
            {character.gender}
          </div>
          <div class="points center">
            {character.status}
          </div>
          <img width="110" height="110" src={character.image} alt={`${character.name} image`} />

        </div>
        <div class="more-info">
          <h1>{character.name}</h1>
          <ul>
            <li>Type: {character.type || 'Unknown'}</li>
            <li>Location: {character.location.name || 'Unknown'}</li>
          </ul>
          
        </div>

      </div>
      <div class="general">
        <h1>{character.name}</h1>
        <ul>
          <li>Type: {character.type || 'Unknown'}</li>
          <li>Location: {character.location.name || 'Unknown'}</li>
        </ul>
        <span class="more">Click the card for more info</span>
      </div>
      {/* <img width="200" src={character.image} alt={`${character.name} image`} />
        <div> <span>Name: </span>{character.name}</div>
        <div> <span>Gender: </span>{character.gender}</div>
        <div> <span>Type: </span>{character.type || 'Unknown'}</div>
        <div> <span>Status: </span>{character.status}</div>
        <div> <span>Location: </span>{character.location.name}</div> */}
    </div>
  );
}
