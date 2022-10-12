import { Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTeamDetails } from "../../app/register/refSlice";
import { ValidateFirst } from "../../app/register/register";

function TeamRegPage({ nextPage, logo }) {
  const [teamName, setTeamName] = useState();
  const [teamLogo, setTeamLogo] = useState();
  const [teamLeader, setTeamLeader] = useState();
  const [teamWP, setTeamWP] = useState();
  const [teamEmail, setTeamEmail] = useState();
  const [teamDiscodeName, setTeamDiscodeName] = useState();
  const [teamDiscodeID, setTeamDiscodeID] = useState();
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.register.team);
  useEffect(() => {
    if (data) {
      setTeamName(data?.name);
      setTeamLeader(data?.leader);
      setTeamWP(data?.whatsapp);
      setTeamEmail(data?.email);
      setTeamDiscodeName(data?.discode?.name);
      setTeamDiscodeID(data?.discode?.id);
    }
  }, [data]);

  // let team = {
  //   name: teamName,
  //   logo: teamLogo,
  //   leader: teamLeader,
  //   whatsapp: teamWP,
  //   email: teamEmail,
  //   discode: { name: teamDiscodeName, id: teamDiscodeID },
  // };
  useEffect(() => {
    if (teamLogo) {
      logo(teamLogo);
    }
  }, [teamLogo, logo]);

  const onHandleBtn = () => {
    setError(true);
    if (
      teamName &&
      // teamLogo &
      teamLeader &&
      teamWP &&
      teamEmail &&
      teamDiscodeName &&
      teamDiscodeID
    )
      nextPage(2);
    dispatch(
      addTeamDetails({
        name: teamName,
        // logo: teamLogo,
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
          required
          error={error ? (teamName ? false : true) : false}
          variant="outlined"
          color="secondary"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </Grid>
      <Grid item md={6} xs={12} className="flex justify-center items-center">
        <label htmlFor="logo-team" className="font-bold w-2/3">
          Team Logo
        </label>
        <input
          type="file"
          id="logo-team"
          onChange={(e) => setTeamLogo(e.target.files[0])}
        />
        {/* <TextField
          fullWidth
          id="logo-team"
          variant="outlined"
          color="secondary"
        /> */}
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          id="leader-team"
          label="Team Leader"
          variant="outlined"
          error={error ? (teamLeader ? false : true) : false}
          required
          value={teamLeader}
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
          error={error ? (teamWP ? false : true) : false}
          id="w-number-contatct"
          value={teamWP}
          label="Whatsapp Number"
          required
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
          error={error ? (teamEmail ? false : true) : false}
          required
          value={teamEmail}
          variant="outlined"
          onChange={(e) => setTeamEmail(e.target.value)}
        />
      </Grid>
      <Grid item md={3} xs={6}>
        <TextField
          fullWidth
          color="secondary"
          value={teamDiscodeName}
          error={error ? (teamDiscodeName ? false : true) : false}
          id="discode-contatct"
          label="Discode Name"
          required
          variant="outlined"
          helperText="discode name with a #code eg. NAME#CODE"
          onChange={(e) => setTeamDiscodeName(e.target.value)}
        />
      </Grid>
      <Grid item md={3} xs={6}>
        <TextField
          error={error ? (teamDiscodeID ? false : true) : false}
          fullWidth
          color="secondary"
          id="discode-contatct"
          value={teamDiscodeID}
          required
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
        <Button variant="contained" fullWidth onClick={() => nextPage(0)}>
          Back
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => onHandleBtn()}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}

export default TeamRegPage;
