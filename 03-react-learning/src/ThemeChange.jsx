import { useContext, useEffect, useRef } from "react";
import { PassProps } from "./PageContext";
import { useNavigate, Link } from "react-router-dom";

function ThemeChange() {
  const ref = useRef();
  const { theme, setTheme } = useContext(PassProps);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    ref.current.focus();
    console.log("Use Effect Used");
  }, []);

  function handleSubmit() {
    ref.current.value = " ";
    ref.current.focus();
  }
  return (
    <>
      <input type="text" ref={ref} className="w-25 form-control m-4" />
      <button className="btn btn-success m-4" onClick={handleSubmit}>
        Clear
      </button>

      <h2>Theme changer (current: {theme ? "dark" : "light"})</h2>
      <button className="btn btn-primary m-4" onClick={() => setTheme(!theme)}>
        {theme ? "light Theme" : "dark Theme"}
      </button>
      <button onClick={handleClick} className="btn btn-danger">
        Back to Home
      </button>
      <Link to="/emp" className="btn btn-warning">
        Go to Employee Page
      </Link>
    </>
  );
}
export default ThemeChange;
