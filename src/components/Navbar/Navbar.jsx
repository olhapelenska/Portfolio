import "./Navbar.scss";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Link
          to="about"
          className="nav__link"
          activeClass="nav__link--active"
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          to="tech-stack"
          className="nav__link"
          activeClass="nav__link--active"
          smooth={true}
          duration={500}
        >
          Tech Stack
        </Link>
        <Link
          to="projects"
          className="nav__link"
          activeClass="nav__link--active"
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
        <Link
          to="experience"
          className="nav__link"
          activeClass="nav__link--active"
          smooth={true}
          duration={500}
        >
          Experience
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
