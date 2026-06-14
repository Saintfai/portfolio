import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="heavy-border navbar">
      <div className="navbar-brand">
        <span className="rotate-text">My</span> <span className="rotate-text-alt">Portfolio</span>
      </div>
      <div className="nav-links">
        <a href="#about" className="btn btn-secondary">About</a>
        <a href="#projects" className="btn btn-primary">Project</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
