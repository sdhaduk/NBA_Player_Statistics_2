import React, { useState } from "react";
import ComparePlayerForm from "../components/ComparePlayerForm.jsx";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
const ComparePlayers = () => {
  const [name, setName] = useState("");

  const setNameCallback = (playerName) => {
    setName(playerName);
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 2 }}>
      <Typography variant="h2" align="center">
        Compare Players
      </Typography>

      <Grid item align="center" sx={{ mt: 5 }}>
        <ComparePlayerForm setNameCallback={setNameCallback} />
      </Grid>

        <Grid container spacing={1} sx={{justifyContent:'center'}}>
          <Grid item>
            <Button variant="outlined" color="primary" sx={{ mt: 1 }}>
              Select
            </Button>
          </Grid>

          <Grid item>
            <Button variant="outlined" color="error" sx={{ mt: 1 }} to='/' component={Link}>
              Back
            </Button>
          </Grid>
      </Grid>

      <Grid item align="center">
        
      </Grid>
    </Box>
  );
};

export default ComparePlayers;
