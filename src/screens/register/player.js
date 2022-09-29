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
function PlayerRegister() {
  return (
    <div className="register">
      <form className="panel">
        <Grid container spacing={2} rowSpacing={1}>
          <Grid
            item
            md={12}
            xs={12}
            className="flex items-center justify-center"
          >
            <h1>Player Registation</h1>
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              id="name-player"
              label="Player Name"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              id="card-player"
              label="Card Image"
              variant="outlined"
              color="secondary"
            />
          </Grid>
          <Grid item md={4} xs={6}>
            <TextField
              fullWidth
              id="code-player"
              label="Valorant Game Name"
              variant="outlined"
              color="secondary"
              helperText="Valorant Username"
            />
          </Grid>
          <Grid item md={2} xs={6}>
            <TextField
              fullWidth
              id="code-player"
              label="Valorant Game Tag"
              variant="outlined"
              color="secondary"
              helperText="Valorant tag"
            />
          </Grid>
          <Grid item md={6} xs={6}>
            <h2 className="ml-2">Contact Details</h2>
          </Grid>
          <Grid item md={6} xs={6}>
            <h2 className="ml-2">Account's Details</h2>
          </Grid>
          <Grid item md={2} xs={6}>
            <TextField
              fullWidth
              color="secondary"
              id="w-number-contatct"
              label="Whatsapp Number"
              variant="outlined"
            />
          </Grid>
          <Grid item md={4} xs={6}>
            <TextField
              fullWidth
              color="secondary"
              id="email-contatct"
              label="Email"
              variant="outlined"
            />
          </Grid>
          {/* <Grid item md={3} xs={6}>
            <TextField
              fullWidth
              color="secondary"
              id="discode-contatct"
              label="Discode Name"
              variant="outlined"
              helperText="discode name with a #code eg. NAME#CODE"
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <TextField
              fullWidth
              color="secondary"
              id="discode-contatct"
              label="Discode Id"
              variant="outlined"
            />
          </Grid> */}
          {/* <Grid item md={12} xs={12}>
            <p className="text-sm text-danger">
              Discode ID: Go to Discord Server> Go to bot command only channel >
              Type !user > click ENTER > copy & Enter your Member ID
            </p>
          </Grid> */}
          {/* <Grid item md={6}>
            <h2 className="ml-2">Account's Details</h2>
          </Grid>

          <Grid item md={6} className="flex items-center justify-center">
            <Link className="text-secondry" to="/valo/player/register">
              Player Registation
            </Link>
          </Grid> */}
          {/* <Grid item md={3} className="flex items-center justify-center">
            <Link className="text-secondry" to="/valo/player/">
              Player Check
            </Link>
          </Grid> */}

          <Grid item md={2}>
            <TextField
              fullWidth
              color="secondary"
              id="level-account"
              label="Acconut Level"
              variant="outlined"
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

          <Grid item md={6}>
            <Button variant="contained" color="secondary" fullWidth>
              Submit
            </Button>
          </Grid>
          {/* <Grid item md={2}></Grid> */}
          <Grid item md={6}>
            <Button variant="contained" fullWidth>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default PlayerRegister;
