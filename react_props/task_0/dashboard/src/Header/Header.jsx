import "./Header.css";

export default function Header() {
  return (
    <header className="app-header">
      {/* Pas d'import d'image ici pour éviter d'exploser en Node */}
      <h1>School dashboard</h1>
    </header>
  );
}
