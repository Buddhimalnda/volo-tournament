import { Button, Grid } from "@mui/material";
import React from "react";

function InitialRegisterPage({ nextPage }) {
  return (
    <div className="flex justify-between text-center h-full flex-col">
      <h1>Registation Form</h1>
      <div className="rules text-left">
        <ul className="bg-gray p-2 text-light">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum
            excepturi odio repellat, harum quos officiis laudantium corporis
            minima fugiat necessitatibus nulla dolorum vero repudiandae ipsa?
            Quas veniam enim sequi.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum
            excepturi odio repellat, harum quos officiis laudantium corporis
            minima fugiat necessitatibus nulla dolorum vero repudiandae ipsa?
            Quas veniam enim sequi.
          </li>
        </ul>
        <div className="check flex items-center">
          <input type="checkbox" value="YES" id="check" />{" "}
          <label htmlFor="check" className="ml-3">
            sc
          </label>
        </div>
      </div>
      <Grid container spacing={2} rowSpacing={1}>
        <Grid item md={6}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => nextPage(1)}
          >
            Next
          </Button>
        </Grid>
        <Grid item md={6}>
          <Button
            variant="contained"
            fullWidth
            // onClick={() => setPageCount(pageCount >= 0 ? pageCount - 1 : 0)}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default InitialRegisterPage;
