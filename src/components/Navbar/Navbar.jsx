import "./Navbar.scss";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-96.5}
          className="nav__link"
        >
          About
        </Link>
        <Link
          to="tech-stack"
          smooth={true}
          duration={500}
          offset={-96.5}
          className="nav__link"
        >
          Tech Stack
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-96.5}
          className="nav__link"
        >
          Projects
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-96.5}
          className="nav__link"
        >
          Experience
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
