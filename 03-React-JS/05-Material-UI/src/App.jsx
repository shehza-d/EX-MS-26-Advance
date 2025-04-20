// // import React, { useState } from 'react'

// // const App = () => {
// //   const [counter , setCounter] = useState(0)

// //   const addCounter = ()=>{
// //     setCounter((prevVal)=>  prevVal + 1)
// //     setCounter((prevVal)=>  prevVal + 1)
// //     setCounter((prevVal)=>  prevVal + 1)
// //     setCounter((prevVal)=>  prevVal + 1)
// //     setCounter((prevVal)=>  prevVal + 1)
// //     // setCounter(counter + 1)
// //     // setCounter(counter + 1)
// //     // setCounter(counter + 1)
// //     // setCounter(counter + 1)
// //   }
// //   const lessCounter = ()=>{
// //     setCounter(counter - 1)
// //   }
// //   return (
// //     <>
// //     <h1>counter {counter}</h1>
// //     <button onClick={addCounter}>Add {counter}</button>
// //     <button onClick={lessCounter}>less {counter}</button>
// //     </>
// //   )
// // }

// // export default App

// import React, { useState } from 'react'
// import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
// import DeleteIcon from '@mui/icons-material/Delete';
// import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';

// const App = () => {
//   const [loading , setLoading] = useState(false)
//   return (
//     <>
//       <Box sx={{
//         backgroundColor: 'red',
//         margin: '20px',
//         color: 'white',
//         textAlign: 'center'
//       }}>
//         <Typography variant='h5'>hello world</Typography>
//       </Box>
//       <Button variant="contained" color='error' fullWidth={false} loading={loading} loadingIndicator={<CircularProgress size={20} thickness={1} />} disabled={false} endIcon={<AirplanemodeInactiveIcon/>}>Contained</Button>
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
//       <Button onClick={()=>setLoading(!loading)} variant="outlined" startIcon={<DeleteIcon />}>
//         Delete
//       </Button>

//     </>
//   )
// }

// export default App

import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MediaCard from "./components/Card";
import Grid from "@mui/material/Grid2";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.products);
        setProducts(res.products);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Grid
        className="container"
        container
        spacing={2}
        sx={{ marginTop: "30px" }}
      >
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
          <Typography sx={{ border: "1px solid black" }} variant="h4">
            size=4
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" align="center">
        Our Products
      </Typography>
      {loading && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "85vh",
          }}
        >
          <CircularProgress size={50} />
        </Box>
      )}
      {error && <Alert severity="error">This is an error Alert.</Alert>}

      <Box className="d-flex justify-content-center flex-wrap gap-5">
        {products &&
          products.map((item) => {
            return (
              <MediaCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.thumbnail}
              />
            );
          })}
      </Box>
    </>
  );
};

export default App;
