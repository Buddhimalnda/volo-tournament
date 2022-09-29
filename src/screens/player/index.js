import { Search } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";
import "./style.scss";
function Player() {
  return (
    <div className="player">
      <form className="panel">
        <div className="inp mb-3">
          <TextField
            fullWidth
            color="secondary"
            id="player-id"
            label="player Id #XXXX"
            variant="outlined"
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          startIcon={<Search />}
        >
          Search Player
        </Button>
      </form>

      <div className="player-card"></div>
    </div>
  );
}

export default Player;
