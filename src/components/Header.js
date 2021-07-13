import "../css/header.css";
export default function Header(props) {
  return <div className="Header">
    <h1>Header</h1>
    {props.children}
  </div>;
}
