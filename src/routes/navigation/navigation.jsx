import NavDropdown from "../../components/NavDropdown/NavDropdown";
import { useDispatch } from "react-redux";
import logoWord from "../../assets/logo-word.png";
import { logout } from "../../redux/features/user/userSlice";
import { NavLink, Outlet } from "react-router-dom";
import React, { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./navigation.css";

const Navigation = () => {
  const [dropdown, setDropdown] = React.useState(false);
  const dispatch = useDispatch();

  const handleDropdownClick = (event) => {
    event.preventDefault();
    setDropdown(!dropdown);
  };

  const handleSignout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <nav className="nav">
        <NavLink to="/">
          <img src={logoWord} className="nav-logo" alt="Perrine Athletics" />
        </NavLink>
        <div className="nav-button-box">
          <button className="dropdown-btn btn" onClick={handleDropdownClick}>
            <IoIosArrowDown />
          </button>
          {dropdown && (
            <NavDropdown dropdown={dropdown} setDropdown={setDropdown} />
          )}

          <button className="logout-btn btn" onClick={handleSignout}>
            Log Out
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
