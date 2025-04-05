// import React from 'react'
// import useFetch from './hooks/useFetch'

// const App = () => {
//   const [loading , error , data] = useFetch('https://jsonplaceholder.typicode.com/users')

//   if(loading){
//     return <h1>Loading...</h1>
//   }

//   if(error){
//     return <h1>Error occured</h1>
//   }

//   return (
//     <>
//       <h1>Hello world</h1>
//       {data.map(item =>{
//         return <p key={item.id}>{item.name}</p>
//       })}
//     </>
//   )
// }

// export default App


// // home
// // about
// // contact
// // services


import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  function goToContact(){
    console.log("go to contact");
    navigate('contact')
    
  }
  return (
    <>
    <div>Home</div>
    <button onClick={goToContact}>contact</button>
    </>
  )
}

export default Home


// daisy ui
// dynamic
// nested
// children to parent