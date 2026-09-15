import { useRef, useState } from "react";

function Fetchn8n() {
  const [value, setValue] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const ref = useRef();

  const fetchData = async (e) => {
    ref.current.focus();
    e.preventDefault();
    setErrorMsg(false);

    try { 
      const response = await fetch(
        "https://4ecc9f0e7db7868ea6e10ba74fa07786.n8n.selfmade.codes/webhook-test/3648f06a-bc29-4d0b-b2d3-b4ece160b5db",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        },
      );
      if (!response.ok) {
        setErrorMsg(true);
        setError(`Error:${response.status}`);
        return;
      }

      const data = await response.text();
      setValue((value) => [...value, data]);
      setMessage("");
    } catch (e) {
      setError(e.message);
      setErrorMsg(true);
      console.log(e);
    }
  };

  return (
    <>
      {errorMsg && <h1>{error}</h1>}
      <div className="conatiner m-4 p-4">
        <form onSubmit={fetchData}>
          <input
            className="m-2 form-control w-25"
            type="text"
            ref={ref}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter content"
          />
          <button type="submit" className="m-2 btn btn-primary">
            Send Data
          </button>
        </form>
        <div className="w-75">value comes here{value}</div>
      </div>
    </>
  );
}
export default Fetchn8n;
