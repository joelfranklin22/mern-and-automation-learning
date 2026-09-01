import { useEffect, useState } from "react";
import axios from "axios";

const CACHE_EXPIRY = 5 * 60 * 1000;

const saveCache = (key, data) => {
  try {
    localStorage.setItem(
      key,
      JSON.stringify({
        data: data,
        timestamp: Date.now(),
      }),
    );
    console.log("Saved");
  } catch (e) {
    if (e.name === "QuotaExceededError") localStorage.clear();
    console.log("Storage limit Hit");
  }
};

const getCache = (key) => {
  try {
    const cached = JSON.parse(localStorage.getItem(key));
    if (!cached) return null;

    const isExpired = Date.now() - cached.timestamp > CACHE_EXPIRY;
    if (isExpired) {
      localStorage.removeItem(key);
      return null;
    }
    return cached.data;
  } catch (e) {
    console.log("No cache Saved", e);
  }
};

const removeCache = (key) => {
  try {
    localStorage.removeItem(key);
    console.log("cache removed");
  } catch (e) {
    console.log(e.message);
  }
};

function Cache() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const API_KEY = import.meta.env.VITE_API_POSTS;

  useEffect(() => {
    async function load() {
      const cached = getCache("employees");
      if (cached) {
        setEmployees(cached);
        return;
      }
      try {
        const response = await axios.get(`${API_KEY}/posts`);
        setEmployees(response.data);
        saveCache("employees", response.data);
      } catch (e) {
        setError(e.message);
      }
    }
    load();
  }, [API_KEY]);

  return (
    <>
      {error && <h2>{error}</h2>}
      <div className="container mt-3">
        {employees.map((emp) => (
          <div className="card mb-4" key={emp.id}>
            <p>{emp.title}</p>
            <p>{emp.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Cache;
