import { Grid } from "@mui/material";
import React from "react";
import PlayerRegister from "./player";

function MemberRegPage() {
  return (
    <div>
      <Grid item md={6}>
        <h2 className="ml-2">Team Member's Details</h2>
      </Grid>
      <div className="ml-5 mb-4">
        <PlayerRegister i={1} />
        <PlayerRegister i={2} />
        <PlayerRegister i={3} />
        <PlayerRegister i={4} />
        <PlayerRegister i={5} />
        <PlayerRegister i={6} />
        <PlayerRegister i={7} />
      </div>
      <Grid item md={12}>
        <p className="text-danger text-center">
          You can have 2 extra players, Its also optional.
        </p>
      </Grid>
    </div>
  );
}

export default MemberRegPage;
