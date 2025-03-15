// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const [users , setUsers] = useState(null);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(res => {
//         console.log(res)
//         setUsers(res)
//       }).catch((err)=>{
//         console.log(err);

//       })
//   }, [])
//   return (
//     <>
//       <h1>Hello world</h1>

//       {users ? users.map(item => {
//         return <p key={item.id}>{item.name}</p>
//       }) : <h1>Loading...</h1>}
//     </>
//   )
// }

// export default App


// // falsy values in js
// // 0
// // ""
// // null
// // undefined
// // Nan
// // false
// // document.all











import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [loading , setLoading] = useState(true)
  const [users , setUsers] = useState(null)
  const [error , setError] = useState(false)
  useEffect(()=>{
    async function getData(){
     try {
       const response = await axios('https://jsonplaceholder.typicode.com/users')
       console.log(response)
       setUsers(response.data)
     } catch (error) {
      console.log('error ==> ' , error);
      setError(true)
      
     } finally {
      console.log("finally");
      setLoading(false);
      
     }
    }

    getData()


  } , [])
  return (
    <>
      <h1>Hello world</h1>
      {loading && <h1>Loading...</h1>}
      {users && users.map(item => {
        return <p key={item.id}>{item.name}</p>
      })}
      {error && <h1>Error occured</h1>}
    </>
  )
}

export default App











