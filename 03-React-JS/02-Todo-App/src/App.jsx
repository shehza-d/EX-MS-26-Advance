// import About from "./About"


// function App() {
//   let username = "abdullah";
//   let num = 20;
//   return (
//     <>
//       <h1 style={{
//         textAlign: 'center',
//         backgroundColor: 'red',
//         color: 'white'
//       }}>Hello world {username}</h1>
//       <p>Lorem ipsum dolor {num + 20} sit amet consectetur adipisicing elit. Dignissimos magnam sed eius reprehenderit quod veniam, eum esse quasi rem repellendus! Provident adipisci repellendus nihil facilis optio aliquam porro consectetur dolores!</p>
//       <About />
//     </>
//   )
// }

// export default App


// css kaisa lagani ha ==> alag sa file banao | inline
// state ka concept
// counter app
// input sa value kaisa get krni ha
// todo app

// hooks

// function App() {
//   // let num = 0;
//   let [num, setNum] = useState(0);

//   const addCounter = () => {
//     setNum(num + 1);
//   }
//   const lessCounter = () => {
//     if (num < 1) {
//       alert('bhai kiya chah rha ha.')
//       return
//     }
//     setNum(num - 1);
//   }


//   return (
//     <>
//       <h1 style={{ textAlign: 'center' }}>Counter {num}</h1>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: '50px'
//       }}>
//         <button onClick={lessCounter} style={{ fontSize: '30px' }}>- {num}</button>
//         <h1>{num}</h1>
//         <button onClick={addCounter} style={{ fontSize: '30px' }}>+ {num}</button>
//       </div>
//     </>
//   )
// }

// export default App





// import React from 'react'

// function App() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const addTodo = (event) => {
//     event.preventDefault();
//     console.log('add todo');

//     console.log(title);
//     console.log(description);

//     setTitle('')
//     setDescription('')

    

//   }
//   return (
//     <>
//       <h1>Todo App</h1>
//       <form onSubmit={addTodo}>
//         <input onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder="title" />
//         <br /><br />
//         <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text" placeholder="description" />
//         <br /><br />
//         <button>add Todo</button>
//       </form>

//       {/* <button onClick={()=> addTodo('abdullah')}>add</button> */}
//     </>
//   )
// }

// export default App


// usestate
// useref


import React , {useRef} from 'react'

function App() {
  const title = useRef();
  const description = useRef();
 
  const addTodo = (event) => {
    event.preventDefault();
    console.log(title.current.value);
    console.log(description.current.value);

    title.current.value = ""
    description.current.value = ""

  }
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder="title" ref={title} />
        <br /><br />
        <input  type="text" placeholder="description" ref={description} />
        <br /><br />
        <button>add Todo</button>
      </form>

      {/* <button onClick={()=> addTodo('abdullah')}>add</button> */}
    </>
  )
}

export default App