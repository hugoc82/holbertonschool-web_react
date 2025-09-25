import "./Header.css";
import logo from "../assets/holberton-logo.jpg";

export default function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="Holberton School logo" className="logo" />
      <h1>School dashboard</h1>
    </header>
  );
}
