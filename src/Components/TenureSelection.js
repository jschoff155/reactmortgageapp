import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TenureSelection = ({mpdata, setmpdata}) => {

  const handleChange = (event) => {
    setmpdata({
      ...mpdata,
      loanTerm: event.target.value,
    });
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={mpdata.loanTerm}
        label="Tenure"
        onChange={handleChange}
      >
        <MenuItem value={10}>10 Years (120 Months)</MenuItem>
        <MenuItem value={15}>15 Years (180 Months)</MenuItem>
        <MenuItem value={20}>20 Years (240 Months)</MenuItem>
        <MenuItem value={30}>30 Years (360 Months)</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TenureSelection;
