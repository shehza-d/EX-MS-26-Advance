// import React from 'react'

// function Btn(props) {
//     return (
//         <>
//             <button style={{
//                 backgroundColor: props.bgColor,
//                 borderRadius: '5px',
//                 border: 'none',
//                 fontSize: '20px',
//                 padding: '10px 25px',
//                 color: 'white',
//                 margin: '0px 10px',
//                 cursor: 'pointer'
//             }}>{props.title}</button>
//         </>
//     )
// }

// export default Btn

import React from "react";

function Btn({ title, func }) {
  return (
    <>
      <button onClick={func}>{title}</button>
    </>
  );
}

export default Btn;
