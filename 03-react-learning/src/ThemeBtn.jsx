import { useContext } from "react";
import { PassProps } from "./PageContext";
import "./App.css";
import { Link } from "react-router-dom";

function ThemeBtn() {
  const { theme, setTheme } = useContext(PassProps);

  return (
    <>
      <h1 className="m-4">Hi i am Dark theme</h1>
      <button className="btn btn-primary" onClick={() => setTheme(!theme)}>
        {theme ? "light Theme" : "dark Theme"}
      </button>
      <Link to="/page" className="btn btn-danger m-2">
        Click me Next Page
      </Link>
      <Link to="/windowSize" className="btn btn-danger m-2">
        Click me window Page
      </Link>
    </>
  );
}
export default ThemeBtn;
