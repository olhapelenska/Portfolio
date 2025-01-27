import logo from "../../assets/images/portfolio-logo.svg";
import { Link, NavLink } from "react-router";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          <img src={logo} alt="Portfolio Logo" />
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
