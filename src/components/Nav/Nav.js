import { NavLink } from "react-router-dom";
import "./Nav.css";


const NavBar = () => {
  return (
    <nav className="Navigation">
      <NavLink  activeClassName="active" to="/" className="logo" >
          GITHUB
        </NavLink>
      <ul className="List-ul">
        <NavLink activeClassName="active" to="/" className="Link">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about" className="Link">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/contact" className="Link">
          Contact
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;