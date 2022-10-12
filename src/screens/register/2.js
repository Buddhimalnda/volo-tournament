import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import PlayerRegister from "./player";

function MemberRegPage({ nextPage }) {
  const [error, setError] = useState(false);

  const onHandleBtn = (e) => {
    setError(true);
    // e.preventdefault();
    if (error) nextPage(3);
  };

  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Grid item md={12}>
        <h2 className="mb-4 text-xl text-center font-bold">
          Team Member's Details
        </h2>
      </Grid>
      <Grid item md={12}>
        <div className="mb-4">
          <PlayerRegister i={0} error={error} />
          <PlayerRegister i={1} error={error} />
          <PlayerRegister i={2} error={error} />
          <PlayerRegister i={3} error={error} />
          <PlayerRegister i={4} error={error} />
          <PlayerRegister i={5} />
          <PlayerRegister i={6} />
        </div>
      </Grid>
      <Grid item md={12}>
        <p className="text-danger text-center">
          You can have 2 extra players, Its also optional.
        </p>
      </Grid>
      <Grid item md={6}>
        <Button variant="contained" fullWidth onClick={() => nextPage(1)}>
          Back
        </Button>
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
    </Grid>
  );
}

export default MemberRegPage;
