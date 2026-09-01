import { Link } from "react-router-dom";
import Navbar, { ThemeContext } from "./Navbar.jsx";
import { useContext } from "react";

function Login() {
  const { theme } = useContext(ThemeContext);
  const data = [
    {
      id: 1,
      name: "joel",
      role: "software developer",
      salary: 8000,
    },
  ];

  return (
    <>
      <h1>Hey I am in Login Page</h1>
      <div className={theme ? "dark" : "light"}>
        <nav>
          <Link to="/Navbar" className="btn btn-primary m-4">
            Go to Navbar
          </Link>
          <Link to="/Profile" className="btn btn-secondary">
            Go to Profile
          </Link>
        </nav>
      </div>
      <Navbar data={data} />
    </>
  );
}
export default Login;
