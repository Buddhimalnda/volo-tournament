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
import MemberRegPage from "./2";
import BankReciptPage from "./3";
import PlayerRegister from "./player";
import "./style.scss";
function Register() {
  const [pageCount, setPageCount] = useState(0);
  const [members, setMembers] = useState();
  const [team, setTeam] = useState();
  const [bank, setBank] = useState();

  return (
    <div className="register">
      <form className="panel">
        <Grid container spacing={2} rowSpacing={1}>
          <Grid item md={12}>
            {pageCount === 0 ? (
              <InitialRegisterPage nextPage={(e) => setPageCount(e)} />
            ) : pageCount === 1 ? (
              <TeamRegPage nextPage={(e) => setPageCount(e)} />
            ) : pageCount === 2 ? (
              <MemberRegPage nextPage={(e) => setPageCount(e)} />
            ) : pageCount === 3 ? (
              <BankReciptPage nextPage={(e) => setPageCount(e)} />
            ) : pageCount < 0 ? (
              setPageCount(0)
            ) : (
              "success"
            )}
          </Grid>
          {/* <Grid item md={6}>
            {pageCount == 4 ? (
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => console.log(members + " ," + team + " ," + bank)}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => setPageCount(pageCount <= 3 ? pageCount + 1 : 0)}
              >
                Next
              </Button>
            )}
          </Grid>
          {/* <Grid item md={2}></Grid> *
          <Grid item md={6}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => setPageCount(pageCount >= 0 ? pageCount - 1 : 0)}
            >
              Back
            </Button>
          </Grid> */}
        </Grid>
      </form>
    </div>
  );
}

export default Register;
