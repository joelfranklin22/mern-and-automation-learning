import useToggle from "./Toggle.jsx";

function Password() {
  const [ addIncrement, subDecrement, resetZero, count ] = useToggle();
  return (
    <>
      <div className="container">
        <p className="form-control w-25 p-2 m-3">Count:{count}</p>

        <button className="btn btn-secondary" onClick={addIncrement}>
          Increment Value
        </button>
        <button className="btn btn-danger" onClick={subDecrement}>
          Decrement Value
        </button>
        <button className="btn btn-info" onClick={resetZero}>
          Reset Value
        </button>
      </div>
    </>
  );
}
export default Password;
