import React from "react";
import {
  Grid,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Stack,
  Button,
} from "@mui/material";

const GetTopPlayersForm = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid sx={{ml: 10}}>
    <Grid
      sx={{ float: "left", position: "relative"}}
      container
      xs={12}
      spacing={1}
    >
      <Grid item>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Stat</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo- simple-select-standard"
            value={age}
            onChange={handleChange}
            label="Stat"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            # of Players
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo- simple-select-standard"
            value={age}
            onChange={handleChange}
            label="# of Players"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>

    <Grid sx={{ml: 11}}>
    <Button variant="outlined" size="medium" sx={{ mt: 4}}>
          Submit
        </Button>
    </Grid>

    </Grid>
  );
};

export default GetTopPlayersForm;
