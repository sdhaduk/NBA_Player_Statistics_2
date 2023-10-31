import React, { useState, useEffect } from "react";
import {
  Grid,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Button,
  ButtonGroup,
  Box,
  Typography
} from "@mui/material";
import { Link } from "react-router-dom";
import TopPlayerTable from "../components/TopPlayerTable.jsx";
import axios from "axios";
import Loading from "../components/Loading.jsx";
import { darken } from '@mui/material/styles';

const GetTopPlayersForm = ({darkMode}) => {

  const [stat, setStat] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const darkModeButton = {mt: 1, color: 'white', border: '1px white solid', "&:hover": {backgroundColor: darken("#FFFFFF", 0.3), borderColor: 'white'}};
  const lightModeButton = {mt: 1, color: 'black', border: '1px black solid', "&:hover": {backgroundColor: darken("#FFFFFF", 0.3), borderColor: 'black'}};

  const getStats = () => {
    setLoading(true)
    axios
    .get(`http://localhost:3000/players/stat/${stat}/538`)
    .then((response) => {
      setData(response.data)
      setLoading(false);
    })
    .catch((error) => {
      console.log(error.message)
      setLoading(false)
    });
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Typography variant="h2" align="center" mt={2}>Top Players</Typography>
      <Grid container spacing={1} sx={{ mt: 20 }}>
        <Grid item xs align="center" sx={{ mt: 0 }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Stat</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo- simple-select-standard"
              value={stat}
              onChange={(event) => setStat(event.target.value)}
              label="Stat"  
            >
              <MenuItem value={"age"}>Age</MenuItem>
              <MenuItem value={"pts_per_game"}>Points Per Game</MenuItem>
              <MenuItem value={"ast_per_game"}>Assists Per Game</MenuItem>
              <MenuItem value={"stl_per_game"}>Steals Per Game</MenuItem>
              <MenuItem value={"blk_per_game"}>Blocks Per Game</MenuItem>
              <MenuItem value={"tov_per_game"}>Turn Overs Per Game</MenuItem>
              <MenuItem value={"orb_per_game"}>
                Offensive Rebounds Per Game
              </MenuItem>
              <MenuItem value={"drb_per_game"}>
                Defensive Rebounds Per Game
              </MenuItem>
              <MenuItem value={"trb_per_game"}>
                Total Rebounds Per Game
              </MenuItem>
              <MenuItem value={"mp_per_game"}>Minutes Per Game</MenuItem>
              <MenuItem value={"fg_per_game"}>Field Goals Per Game</MenuItem>
              <MenuItem value={"fga_per_game"}>
                Field Goal Attempts Per Game
              </MenuItem>
              <MenuItem value={"fg_percent"}>Field Goal Percent</MenuItem>
              <MenuItem value={"x3p_percent"}>Three Point Percent</MenuItem>
              <MenuItem value={"e_fg_percent"}>
                Effective Field Goal Percent
              </MenuItem>
              <MenuItem value={"ft_percent"}>Free Throw Percent</MenuItem>
            </Select>
          </FormControl>

          <Grid item>
          <ButtonGroup>
            <Button variant="outlined" size="medium" sx={darkMode ? darkModeButton : lightModeButton} onClick={getStats}>
              Submit
            </Button>
            <Button variant="outlined" color="error" size="medium" sx={{ mt: 1 }} to="/" component={Link}>
              Back
            </Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <Grid item xs={8} align="center">
        {loading ? <Loading /> : <TopPlayerTable data={data} stat={stat} darkMode={darkMode}/>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetTopPlayersForm;
