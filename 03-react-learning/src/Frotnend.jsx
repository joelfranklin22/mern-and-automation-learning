import { useEffect, useState } from "react";
import axios from "axios";

function Frotnend() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="container">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Frotnend;
