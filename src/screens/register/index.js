import {
  Button,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InitialRegisterPage from "./0";
import TeamRegPage from "./1";
import MemberRegPage from "./1";
import BankReciptPage from "./3";
import PlayerRegister from "./player";
import "./style.scss";
function Register() {
  const [pageCount, setPageCount] = useState(0);
  return (
    <div className="register">
      <form className="panel">
        <Grid container spacing={2} rowSpacing={1}>
          <Grid item md={12}>
            {pageCount === 0 ? (
              <InitialRegisterPage />
            ) : pageCount === 1 ? (
              <TeamRegPage />
            ) : pageCount === 2 ? (
              <MemberRegPage />
            ) : pageCount === 3 ? (
              <BankReciptPage />
            ) : (
              "success"
            )}
          </Grid>
          <Grid item md={6}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => setPageCount(pageCount <= 3 ? pageCount + 1 : 0)}
            >
              Next
            </Button>
          </Grid>
          {/* <Grid item md={2}></Grid> */}
          <Grid item md={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setPageCount(pageCount >= 0 ? pageCount - 1 : 0)}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Register;
