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
import React, { useEffect, useState } from "react";
import "./style.scss";
function PlayerRegister({ data, i }) {
  const [name, setName] = useState();
  const [roitId, setRoitId] = useState();
  const [tag, setTag] = useState();
  const [rank, setRank] = useState("Iron");
  const [level, setLevel] = useState(1);
  useEffect(() => {
    data({
      name: name,
      roit_id: roitId,
      tag: tag,
      rank: { code: rank, level: level },
    });
  }, [name, roitId, tag, rank, level, data]);
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
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item md={2} xs={6}>
        <TextField
          fullWidth
          id="code-player"
          label="Riot ID"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          color="secondary"
        />
      </Grid>
      <Grid item md={2} xs={6}>
        <TextField
          fullWidth
          onChange={(e) => setName(e.target.value)}
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
            value={rank}
            label="Rack Name"
            onChange={(e) => setRank(e.target.value)}
          >
            <MenuItem value="Iron">Iron</MenuItem>
            <MenuItem value="Bronze">Bronze</MenuItem>
            <MenuItem value="Silver">Silver</MenuItem>
            <MenuItem value="Gold">Gold</MenuItem>
            <MenuItem value="Platinum">Platinum</MenuItem>
            <MenuItem value="Diamond">Diamond</MenuItem>
            <MenuItem value="Ascendant">Ascendant</MenuItem>
            <MenuItem value="Immortal">Immortal</MenuItem>
            <MenuItem value="Radiant">Radiant</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Rank level</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="rank-count-account"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
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
