import {
  Button,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function PlayerRegister({ data, i }) {
  return (
    <Grid container spacing={2} rowSpacing={1} className="mb-3">
      <Grid item md={1} xs={12}>
        <p className="flex justify-center items-center h-14">#0{i}</p>
      </Grid>
      <Grid item md={3} xs={12}>
        <TextField
          fullWidth
          id="name-player"
          label="Player Name"
          variant="outlined"
          color="secondary"
        />
      </Grid>
      <Grid item md={2} xs={6}>
        <TextField
          fullWidth
          id="code-player"
          label="Riot ID"
          variant="outlined"
          color="secondary"
        />
      </Grid>
      <Grid item md={2} xs={6}>
        <TextField
          fullWidth
          id="code-player"
          label="Tag line"
          variant="outlined"
          color="secondary"
        />
      </Grid>

      {/* <Grid item md={3}></Grid> */}
      <Grid item md={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Rack Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="rank-name-account"
            value={10}
            label="Rack Name"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Iron</MenuItem>
            <MenuItem value={20}>Bronze</MenuItem>
            <MenuItem value={30}>Silver</MenuItem>
            <MenuItem value={30}>Gold</MenuItem>
            <MenuItem value={30}>Platinum</MenuItem>
            <MenuItem value={30}>Diamond</MenuItem>
            <MenuItem value={30}>Ascendant</MenuItem>
            <MenuItem value={30}>Immortal</MenuItem>
            <MenuItem value={30}>Radiant</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Rank level</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="rank-count-account"
            value={1}
            label="Rank level"
            // onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default PlayerRegister;
