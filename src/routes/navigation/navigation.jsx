import NavDropdown from "../../components/NavDropdown/NavDropdown";
import { useDispatch } from "react-redux";
import logoWord from "../../assets/logo-word.png";
import { logout } from "../../redux/features/user/userSlice";
import { NavLink, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./navigation.css";

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
          <NavDropdown />
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
