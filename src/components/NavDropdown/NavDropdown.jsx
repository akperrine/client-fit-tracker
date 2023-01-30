import { NavLink } from "react-router-dom";
import "./NavDropdown.css";

const NavDropdown = ({ dropdown, setDropdown }) => {
  const handleClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="dropdown-container">
      <NavLink to="/week">
        <button className="menu-btn" onClick={handleClick}>
          Week View
        </button>
      </NavLink>
    </div>
  );
};

export default NavDropdown;
