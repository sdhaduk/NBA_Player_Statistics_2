import React from "react";
import {
  Grid,
  Select,
  FormControl,
  MenuItem,
  InputLabel,

  Button,
} from "@mui/material";

const GetTopPlayersForm = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="center">
      <Grid container xs={12} spacing={1} sx={{'justifyContent': 'center'}}>
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
        <Button variant="outlined" size="medium" sx={{'mt': 3}}>
          Submit
        </Button>
      </Grid>
    </div>
  );
};

export default GetTopPlayersForm;
