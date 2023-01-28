import "./navigation.css";
import { useDispatch } from "react-redux";
import logoWord from "../../assets/logo-word.png";
import { logout } from "../../redux/features/user/userSlice";
import { NavLink, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { IoIosArrowDown, IoIosArrowDropdown } from "react-icons/io";
import { BsCaretDownFill } from "react-icons/bs";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleSignout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };
  return (
    <Fragment>
      <nav className="nav">
        <NavLink to="/">
          <img src={logoWord} className="nav-logo" alt="Perrine Athletics" />
        </NavLink>
        <div className="nav-button-box">
          <button className="dropdown-btn btn">
            <IoIosArrowDown />
          </button>
          <button className="logout-btn btn" onClick={handleSignout}>
            Log Out
          </button>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
