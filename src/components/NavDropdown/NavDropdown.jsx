import { NavLink } from "react-router-dom";
import "./NavDropdown.css";

const NavDropdown = ({ dropdown, setDropdown }) => {
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="dropdown-container">
      <NavLink className="nav-link" to="/week">
        <button className="menu-btn" onClick={handleClick}>
          Week View
        </button>
      </NavLink>
      <NavLink className="nav-link" to="/goals">
        <button className="menu-btn" onClick={handleClick}>
          Goals
        </button>
      </NavLink>
      <NavLink className="nav-link" to="/chat">
        <button className="menu-btn" onClick={handleClick}>
          Chat
        </button>
      </NavLink>
    </div>
  );
};

export default NavDropdown;
