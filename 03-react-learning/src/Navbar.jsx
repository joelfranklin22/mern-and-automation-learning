import { createContext, useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Profile from "./Profile";

export const ThemeContext = createContext();

function Navbar({ data }) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>This is Navbar Page</h1>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={theme ? "dark" : "light"}>
          <button
            className="btn btn-primary p-3 m-3"
            onClick={() => setTheme((prev) => !prev)}
          >
            {theme ? "Dark" : "Light"}
          </button>
        </div>
        <Link to="/" className="btn btn-danger p-2 m-3">
          Login Page
        </Link>
      </ThemeContext.Provider>

      <Profile data={data} />
    </>
  );
}
export default Navbar;
