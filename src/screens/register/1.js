import { Grid, TextField } from "@mui/material";
import React from "react";

function TeamRegPage() {
  return (
    <div>
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
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          id="logo-team"
          label="Team Logo"
          variant="outlined"
          color="secondary"
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          id="leader-team"
          label="Team Leader"
          variant="outlined"
          color="secondary"
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
      <Grid item md={3} xs={6}>
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
      </Grid>
      <Grid item md={12} xs={12}>
        <p className="text-sm text-danger">
          Discode ID: Go to Discord Server &gt; Go to bot command only channel
          &gt; Type !user &gt; click ENTER {">"} copy & Enter your Member ID
        </p>
      </Grid>
    </div>
  );
}

export default TeamRegPage;
