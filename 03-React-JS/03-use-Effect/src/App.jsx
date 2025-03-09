import React, { useState } from 'react'
import Btn from './components/Btn'
import Card from './components/Card'

function App() {
  const [show , setShow] = useState(true)

  return (
    <>
      <h1>Hello world</h1>
      <Btn title={show ? 'hide' : 'show'} bgColor="purple"/>
      {/* <Btn title="delete Todo" bgColor="orange"/> */}
      <Card image="https://placehold.co/200/red/white" title= "hello world"/>
      <Card image="https://placehold.co/200/purple/white" title= "lorem ipsum"/>
    </>
  )
}

export default App

// component reuseablity
// props