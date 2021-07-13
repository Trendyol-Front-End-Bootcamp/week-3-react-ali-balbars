import "../css/character-detail.css";

export default function CharacterCard(props) {
  return <div className="CharacterCard">
    <img src={props.character.image} alt="" />
    <p>{props.character.name}</p>
    </div>;
}
