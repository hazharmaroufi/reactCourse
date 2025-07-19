import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increaseHandler() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={increaseHandler}>Increase</button>
      {/* <button onClick={() => console.log("increase")}>Increase</button> */}
    </div>
  );
};
export default Counter;
