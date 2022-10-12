import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMembersDetails } from "../../app/register/refSlice";
import "./style.scss";
function PlayerRegister({ i, error, isError }) {
  const [name, setName] = useState();
  const [roitId, setRoitId] = useState();
  const [tag, setTag] = useState();
  const [rank, setRank] = useState("Iron");
  const [level, setLevel] = useState(1);
  const data = useSelector((state) => state.register.members[i]);
  useEffect(() => {
    if (data) {
      setName(data[0]);
      setRoitId(data[1]);
      setTag(data[2]);
      setRank(data[3] ? data[3] : "None");
      setLevel(data[4] ? data[4] : 0);
    }
  }, [name, roitId, tag, rank, level, data]);
  const dispatch = useDispatch();
  const onChangeHandler = async (e) => {
    const id =
      e.target.id === "name"
        ? 0
        : e.target.id === "riotId"
        ? 1
        : e.target.id === "tag"
        ? 2
        : e.target.name === "rank"
        ? 3
        : e.target.name === "count"
        ? 4
        : 5;
    const value = e.target.value;
    switch (id) {
      case 0:
        setName(value);
        break;
      case 1:
        setRoitId(value);
        break;
      case 2:
        setTag(value);
        break;
      case 3:
        setRank(value);
        break;
      case 4:
        setLevel(value);
        break;
      default:
        console.log("id error", e);
        break;
    }
    await dispatch(
      addMembersDetails({
        i: i,
        id: id,
        value: value,
      })
    );
  };
  return (
    <Grid container spacing={2} rowSpacing={1} className="mb-3">
      <Grid item md={1} xs={12}>
        <p className="flex justify-center items-center h-14">#0{i + 1}</p>
      </Grid>
      <Grid item md={3} xs={12}>
        <TextField
          fullWidth
          id="name"
          error={error ? (name ? false : true) : false}
          label="Player Name"
          variant="outlined"
          color="secondary"
          value={name}
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>
      <Grid item md={2} xs={6}>
        <TextField
          fullWidth
          error={error ? (roitId ? false : true) : false}
          id="riotId"
          value={roitId}
          label="Riot ID"
          variant="outlined"
          onChange={(e) => onChangeHandler(e)}
          color="secondary"
        />
      </Grid>
      <Grid item md={2} xs={6}>
        <TextField
          error={error ? (tag ? false : true) : false}
          fullWidth
          onChange={(e) => onChangeHandler(e)}
          id="tag"
          label="Tag line"
          variant="outlined"
          value={tag}
          color="secondary"
        />
      </Grid>

      {/* <Grid item md={3}></Grid> */}
      <Grid item md={2}>
        <FormControl fullWidth>
          <InputLabel id="rank-l">Rack Name</InputLabel>
          <Select
            labelId="rank-l"
            id="rank"
            error={error ? (rank !== "None" ? false : true) : false}
            name="rank"
            value={rank}
            label="Rack Name"
            onChange={(e) => onChangeHandler(e)}
          >
            <MenuItem value="None">None </MenuItem>
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
          <InputLabel id="level-label">Rank level</InputLabel>
          <Select
            labelId="level-label"
            id="count"
            error={error ? (level !== 0 ? false : true) : false}
            name="count"
            onChange={(e) => onChangeHandler(e)}
            value={level}
            label="Rank level"
            // onChange={handleChange}
          >
            <MenuItem value={0}>0</MenuItem>
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
