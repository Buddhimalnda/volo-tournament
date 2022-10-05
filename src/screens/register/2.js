import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlayerRegister from "./player";

function MemberRegPage({ nextPage }) {
  const [playerOne, setPlayerOne] = useState({});
  const [playerTwo, setPlayerTwo] = useState({});
  const [playerThree, setPlayerThree] = useState({});
  const [perlayFour, seterPlayerFour] = useState({});
  const [playerFive, setPlayerFive] = useState({});
  const [playerSix, setPlayerSix] = useState({});
  const [playerSeven, setPlayerSeven] = useState({});

  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Grid item md={12}>
        <h2 className="mb-4 text-xl text-center font-bold">
          Team Member's Details
        </h2>
      </Grid>
      <Grid item md={12}>
        <div className="mb-4">
          <PlayerRegister i={1} data={(e) => setPlayerOne(e)} />
          <PlayerRegister i={2} data={(e) => setPlayerTwo(e)} />
          <PlayerRegister i={3} data={(e) => setPlayerThree(e)} />
          <PlayerRegister i={4} data={(e) => seterPlayerFour(e)} />
          <PlayerRegister i={5} data={(e) => setPlayerFive(e)} />
          <PlayerRegister i={6} data={(e) => setPlayerSix(e)} />
          <PlayerRegister i={7} data={(e) => setPlayerSeven(e)} />
        </div>
      </Grid>
      <Grid item md={12}>
        <p className="text-danger text-center">
          You can have 2 extra players, Its also optional.
        </p>
      </Grid>
      <Grid item md={6}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => nextPage(3)}
        >
          Next
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="contained" fullWidth onClick={() => nextPage(1)}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}

export default MemberRegPage;
