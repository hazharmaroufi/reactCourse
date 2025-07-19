import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isShow, setIsShow] = useState(true);

  function increaseHandler() {
    setCounter((counter) => counter + 1);
  }
  function increaseHandler3() {
    // setCounter(counter + 3)
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  }
  function stopHandler() {
    setCounter(0);
  }
  function showHandler() {
    setIsShow(true);
  }
  const hideHandler = () => {
    setIsShow(false);
  };

  return (
    <>
      <button onClick={showHandler}>Show</button>
      <button onClick={hideHandler}>Hide</button>
      {isShow && (
        <div>
          <h1>Counter</h1>
          <p>{counter}</p>
          <button onClick={increaseHandler}>Increase 1</button>
          <button onClick={increaseHandler3}>Increase 3</button>
          <button onClick={stopHandler}>Stop</button>
        </div>
      )}
    </>
  );
};
export default Counter;
