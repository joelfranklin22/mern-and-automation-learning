import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const userData = JSON.parse(
    localStorage.getItem("user") || sessionStorage.getItem("user"),
  );

  useEffect(() => {
    if (!userData) navigate("/");
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <h1>Welcome, {userData?.name}!</h1>
      <button className="btn btn-danger m-2" onClick={handleLogOut}>
        Log Out
      </button>
    </>
  );
}

export default Home;
