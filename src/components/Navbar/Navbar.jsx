import "./Navbar.scss";
import { Link } from "react-scroll";

// Navigation Links Data
const navLinks = [
  { label: "About", to: "about" },
  { label: "Tech Stack", to: "tech-stack" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
];

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__links">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            smooth={true}
            duration={500}
            offset={-96.5}
            className="nav__link"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
