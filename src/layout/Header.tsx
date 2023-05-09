import classes from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { AuthActions, AuthState } from "../redux/slices/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector<AuthState>((state) => state.auth);
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
    navigate("/");
  };
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? classes.active : undefined;
            }}
            end
          >
            Home
          </NavLink>
        </li>

        <li>
          {!isAuth && !localStorage.getItem("logged") ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Login
            </NavLink>
          ) : (
            <>
              <NavLink onClick={logoutHandler} to="/">
                Logout
              </NavLink>
            </>
          )}
        </li>
      </ul>
    </header>
  );
};

export default Header;
