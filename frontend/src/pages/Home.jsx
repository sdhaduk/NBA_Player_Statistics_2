import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
} from "@mui/material";
import PlayerTable from "../components/PlayerTable";
import Loading from "../components/Loading";
import axios from 'axios';

const Home = ({darkModeOff, darkModeOn}) => {
    
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
        axios
        .get("http://localhost:3000/players/all")
        .then((response) => {
            setPlayers(response.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            setLoading(false)
        });
    }, []);

  return (
    <Grid container spacing={1} align="center">
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Typography variant="h2">NBA Statistics 2023</Typography>
      </Grid>
      {loading ? <Loading /> : <PlayerTable players={players} darkModeOn={darkModeOn} darkModeOff={darkModeOff} />}
    </Grid>
  );
};

export default Home;
