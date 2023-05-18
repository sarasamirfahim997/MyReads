import classes from "./Auth.module.css";
import { ImHappy2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/store/store";
import { AuthActions, AuthState } from "../redux/slices/authSlice";
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector<AuthState>((state) => state.auth);
  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(AuthActions.login());
    navigate("/");
  };
  return (
    <main className={classes.auth} data-testid="auth">
      <section>
        {!isAuth ? (
          <form onSubmit={loginHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" aria-label="email" required id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                id="password"
                aria-label="password"
              />
            </div>
            <button>Login</button>
          </form>
        ) : (
          <div className={classes.loggedIn}>
            <ImHappy2 />
            <p>Logged In</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Auth;
