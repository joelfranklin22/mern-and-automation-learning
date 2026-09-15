import { useState } from "react";

function Toggle(intialValue = 0) {
  const [count, setCount] = useState(intialValue);

  function addIncrement() {
    setCount(count + 1);
  }
  function subDecrement() {
    count < 1 ? setCount(0) : setCount(count - 1);
  }

  function resetZero() {
    setCount(intialValue);
  }
  return [ addIncrement, subDecrement, resetZero, count ];
}
export default Toggle;
