import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBankDetail } from "../../app/register/refSlice";

function BankReciptPage({ nextPage }) {
  const [file, setFile] = useState();
  // useEffect(() => {
  //   data({ file: file });
  // }, [data, file]);
  const dispatch = useDispatch();
  const onHandleBtn = (e) => {
    // e.preventdefault();
    nextPage(4);
    dispatch(
      addBankDetail({
        timestamp: new Date().toJSON,
        bank: file,
      })
    )
  };
  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Grid item md={12}>
        <h2 className="mb-4 text-xl text-center font-bold">Payment Details</h2>
      </Grid>
      <Grid item md={12} xs={12}>
        <p className="text-center">Upload your Screenshot of bank recipt</p>
      </Grid>
      <Grid
        item
        md={12}
        xs={12}
        className="justify-center flex items-center w-full"
      >
        <input
          type="file"
          className="ml-20"
          onChange={(e) => setFile(e.target.files)}
        />
      </Grid>
      <Grid item md={12}>
        <p className="text-danger text-center"></p>
      </Grid>
      <Grid item md={6}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => nextPage(4)}
        >
          Next
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="contained" fullWidth onClick={() => nextPage(2)}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
}

export default BankReciptPage;
