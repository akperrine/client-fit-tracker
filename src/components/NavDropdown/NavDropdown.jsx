import { NavLink } from "react-router-dom";
import "./NavDropdown.css";

const NavDropdown = () => {
  return (
    <div className="dropdown-container">
      <NavLink to="/week">
        <button className="menu-btn">Week View</button>
      </NavLink>
    </div>
  );
};

export default NavDropdown;
