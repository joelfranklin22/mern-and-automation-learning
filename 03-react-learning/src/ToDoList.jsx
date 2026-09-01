import { useRef, useState } from "react";

function ToDoList() {
  const reference = useRef(null);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  function call() {
    reference.current.focus();
    if (search.trim() == "") return;
    setNotes([...notes, search]);
    setSearch("");
  }

  return (
    <>
      <div className="input">
        <input
          type="text"
          className="m-4 "
          ref={reference}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary btn-lg" onClick={call}>
          Add
        </button>
      </div>
      <div className="toDoList">
        <h1 className="fs-2 m-4">Notes</h1>
        <div className="list-content fs-4 m-4">
          {notes.map((notes, index) => (
            <div key={index} className="border p-2 mb-2">
              {notes}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default ToDoList;
