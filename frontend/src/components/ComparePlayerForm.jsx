import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Option 1", "Option 2"];

const ComparePlayerForm = ({ setNameCallback }) => {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setNameCallback(value);
  }, [value]);

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Players" />}
      />
    </div>
  );
};

export default ComparePlayerForm;
