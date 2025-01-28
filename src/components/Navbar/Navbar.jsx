import "./Navbar.scss";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Link to="#about" className="nav__link">
          About
        </Link>
        <Link to="#tech-stack" className="nav__link">
          Tech Stack
        </Link>
        <Link to="#projects" className="nav__link">
          Projects
        </Link>
        <Link to="#experience" className="nav__link">
          Experience
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
