import { useState, useEffect } from "react";

const useApi = (url) => {
  const [data, SetData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }

        const data = await response.json();
        SetData(data);
      } catch (err) {
        SetError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return { loading, data, error };
};

export default useApi;
