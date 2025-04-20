import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  useEffect(() => {
    console.log("counter com mounted");
  }, [counterTwo]);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>
        counter one {counter}
      </button>
      <button onClick={() => setCounterTwo(counterTwo + 5)}>
        counter two {counterTwo}
      </button>
    </>
  );
};

export default Counter;
