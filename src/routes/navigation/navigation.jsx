import "./navigation.css";
import { useDispatch } from "react-redux";
import logoWord from "../../assets/logo-word.png";
import { logout } from "../../redux/features/user/userSlice";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleSignout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };
  return (
    <Fragment>
      <nav className="nav">
        <img src={logoWord} className="nav-logo" alt="Perrine Athletics" />
        <button className="logout-btn btn" onClick={handleSignout}>
          Log Out
        </button>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
