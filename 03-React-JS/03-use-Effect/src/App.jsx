// import React, { useState } from 'react'
// import Btn from './components/Btn'
// import Card from './components/Card'

// function App() {
//   const [show , setShow] = useState(true)

//   return (
//     <>
//       <h1>Hello world</h1>
//       <Btn title={show ? 'hide' : 'show'} bgColor="purple"/>
//       {/* <Btn title="delete Todo" bgColor="orange"/> */}
//       <Card image="https://placehold.co/200/red/white" title= "hello world"/>
//       <Card image="https://placehold.co/200/purple/white" title= "lorem ipsum"/>
//     </>
//   )
// }

// export default App

// // component reuseablity
// // props

import { useEffect, useState } from "react";
import Card from "./components/Card";
function App() {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  useEffect(() => {
    console.log("app component mounted");
  }, [counterTwo]);

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={() => setCounter(counter + 1)}>
        counter One {counter}
      </button>{" "}
      <br />
      <br />
      <button onClick={() => setCounterTwo(counterTwo + 5)}>
        counter Two {counterTwo}
      </button>
      <br />
      <br />
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      {show && (
        <Card image="https://placehold.co/200/red/white" title="hello world" />
      )}
    </>
  );
}

export default App;

// mount pa koi specific
// unmount pa koi specific
// [] ka saath
// without []
// [] array ma state
