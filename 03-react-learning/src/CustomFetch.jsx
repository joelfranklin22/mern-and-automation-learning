import { useEffect, useState } from "react";
import axios from "axios";

function CustomFetch(url, method = "GET", body = null) {
  const [fetchData, setFetchData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchusers = async () => {
    try {
      setLoading(true);
      const response = await axios({
        url,
        method,
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("hiiiiiiiiiiiii", response.data);
      setFetchData(response.data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (method === "GET") fetchusers();
  }, [url, method]);
  return [fetchData, error, loading];
}
export default CustomFetch;
