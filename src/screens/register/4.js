import { Grid, Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function Validate({ nextPage }) {
  const [state, setstate] = useState(initialState);
  const register = useSelector((state) => state.register);
  const onHandleBtn = (e) => {
    // e.preventdefault();
    nextPage(5);
  };
  const checkData = async () => {
    if (register) console.log(register);
    //CHECK TEAM DETAILS
    if (register.team) {
    }
    //CHECK MEMBER'S DETAILS
    //CHECK BANK DETAILS
  };
  checkData();
  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Grid>
  );
}

export default Validate;
