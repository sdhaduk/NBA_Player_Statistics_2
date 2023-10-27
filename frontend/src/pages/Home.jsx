import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
} from "@mui/material";
import PlayerTable from "../components/PlayerTable";
import axios from 'axios';

const Home = () => {
    
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:3000/players/all")
        .then((response) => {
            setPlayers(response.data)
        })
        .catch((error) => {
            console.log(error)
        });
    }, []);

  return (
    <Grid container spacing={1} align="center">
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography variant="h2">NBA Statistics 2023</Typography>
      </Grid>
      <PlayerTable players={players} />   
    </Grid>
  );
};

export default Home;
