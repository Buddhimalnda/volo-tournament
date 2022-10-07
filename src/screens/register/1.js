import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTeamDetails } from "../../app/register/refSlice";

function TeamRegPage({ nextPage }) {
  const [teamName, setTeamName] = useState();
  const [teamLogo, setTeamLogo] = useState();
  const [teamLeader, setTeamLeader] = useState();
  const [teamWP, setTeamWP] = useState();
  const [teamEmail, setTeamEmail] = useState();
  const [teamDiscodeName, setTeamDiscodeName] = useState();
  const [teamDiscodeID, setTeamDiscodeID] = useState();
  const dispatch = useDispatch();
  let team = {
    name: teamName,
    logo: teamLogo,
    leader: teamLeader,
    whatsapp: teamWP,
    email: teamEmail,
    discode: { name: teamDiscodeName, id: teamDiscodeID },
  };

  const onHandleBtn = (e) => {
    // e.preventdefault();
    nextPage(2);
    dispatch(
      addTeamDetails({
        name: teamName,
        logo: teamLogo,
        leader: teamLeader,
        whatsapp: teamWP,
        email: teamEmail,
        discode: { name: teamDiscodeName, id: teamDiscodeID },
      })
    );
  };

  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Grid item md={12} xs={12} className="flex items-center justify-center">
        <h1>Team Register</h1>
      </Grid>
      <Grid item md={12} xs={12}>
        <TextField
          fullWidth
          id="name-team"
          label="Team Name"
          variant="outlined"
          color="secondary"
          onChange={(e) => setTeamName(e.target.value)}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          id="logo-team"
          label="Team Logo"
          variant="outlined"
          color="secondary"
          onChange={(e) => setTeamLogo(e.target.value)}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          id="leader-team"
          label="Team Leader"
          variant="outlined"
          color="secondary"
          onChange={(e) => setTeamLeader(e.target.value)}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <h2 className="ml-2">Leader Contact Details</h2>
      </Grid>
      <Grid item md={2} xs={6}>
        <TextField
          fullWidth
          color="secondary"
          id="w-number-contatct"
          label="Whatsapp Number"
          variant="outlined"
          onChange={(e) => setTeamWP(e.target.value)}
        />
      </Grid>
      <Grid item md={4} xs={6}>
        <TextField
          fullWidth
          color="secondary"
          id="email-contatct"
          label="Email"
          variant="outlined"
          onChange={(e) => setTeamEmail(e.target.value)}
        />
      </Grid>
      <Grid item md={3} xs={6}>
        <TextField
          fullWidth
          color="secondary"
          id="discode-contatct"
          label="Discode Name"
          variant="outlined"
          helperText="discode name with a #code eg. NAME#CODE"
          onChange={(e) => setTeamDiscodeName(e.target.value)}
        />
      </Grid>
      <Grid item md={3} xs={6}>
        <TextField
          fullWidth
          color="secondary"
          id="discode-contatct"
          label="Discode Id"
          variant="outlined"
          onChange={(e) => setTeamDiscodeID(e.target.value)}
        />
      </Grid>
      <Grid item md={12} xs={12}>
        <p className="text-sm text-danger">
          Discode ID: Go to Discord Server &gt; Go to bot command only channel
          &gt; Type !user &gt; click ENTER {">"} copy & Enter your Member ID
        </p>
      </Grid>
      <Grid item md={6}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={(e) => onHandleBtn(e)}
        >
          Next
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="contained" fullWidth onClick={() => nextPage(0)}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}

export default TeamRegPage;
