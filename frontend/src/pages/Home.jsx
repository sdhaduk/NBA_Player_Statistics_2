import React from 'react';
import { Grid, Typography } from "@mui/material";


const Home = () => {
  return (
   <Grid container spacing={1} align='center'>
    <Grid item xs={12} sx={{mt: 2}}>
        <Typography variant='h2'>NBA Statistics 2023</Typography>
    </Grid>

   </Grid>
  )
};

export default Home;