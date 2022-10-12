import { Button, Grid, Skeleton } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fs, storage } from "../../app/config.firebase";
import { UploadLogo, ValidateData } from "../../app/register/register";

function Validate({ nextPage, logo, payment }) {
  // const [state, setstate] = useState(initialState);
  const register = useSelector((state) => state.register);
  const [metaDatalogo, setMetadatalogo] = useState();
  const [metaDataPayment, setMetadataPayment] = useState();
  const [isValidateTeam, setValidateTeam] = useState(0);
  const [isValidateMember, setValidateMember] = useState(0);
  const [isValidateBank, setValidateBank] = useState(0);

  const data = useSelector((state) => state.register);
  const qrGenerator = (code) => {
    // `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`;
  };
  const uploadLogo = (img, type) => {
    const folder = type === 0 ? "logos" : "payments";
    const spaceRef = ref(
      storage,
      folder + "/team-" + folder + "-" + data?.team?.name.split(" ")[0]
    );
    const uploadTask = uploadBytes(spaceRef, img);
    uploadTask
      .then((snapshot) => {
        if (type === 0)
          getDownloadURL(spaceRef).then((url) => setMetadatalogo(url));
        else getDownloadURL(spaceRef).then((url) => setMetadataPayment(url));
      })
      .catch((error) => {
        console.log(error);
      });
    return type === 0 ? metaDatalogo : metaDataPayment;
  };

  const onHandleBtn = async (e) => {
    // e.preventdefault();
    // uploadLogo(logo, 0);

    await uploadLogo(logo, 0);
    await uploadLogo(payment, 1);
    console.log(metaDatalogo);
    // nextPage(5);
    await setDoc(doc(fs, "register", register?.team?.name), {
      team: register?.team,
      logo: metaDatalogo
        ? metaDatalogo
        : "https://cdn.discordapp.com/attachments/956724850079195196/985444295421071380/5448996.jpg",
      members: [
        {
          name: register?.members[0][0],
          roitId: register?.members[0][1],
          tag: register?.members[0][2],
          rank: register?.members[0][3],
          level: register?.members[0][4],
        },
        {
          name: register?.members[1][0],
          roitId: register?.members[1][1],
          tag: register?.members[1][2],
          rank: register?.members[1][3],
          level: register?.members[1][4],
        },
        {
          name: register?.members[2][0],
          roitId: register?.members[2][1],
          tag: register?.members[2][2],
          rank: register?.members[2][3],
          level: register?.members[2][4],
        },
        {
          name: register?.members[3][0],
          roitId: register?.members[3][1],
          tag: register?.members[3][2],
          rank: register?.members[3][3],
          level: register?.members[3][4],
        },
        {
          name: register?.members[4][0],
          roitId: register?.members[4][1],
          tag: register?.members[4][2],
          rank: register?.members[4][3],
          level: register?.members[4][4],
        },
        {
          name: register?.members[5][0] ? register?.members[5][0] : "",
          roitId: register?.members[5][1] ? register?.members[5][1] : "",
          tag: register?.members[5][2] ? register?.members[5][2] : "",
          rank: register?.members[5][3] ? register?.members[5][3] : "",
          level: register?.members[5][4] ? register?.members[5][4] : "",
        },
        {
          name: register?.members[6][0] ? register?.members[6][0] : "",
          roitId: register?.members[6][1] ? register?.members[6][1] : "",
          tag: register?.members[6][2] ? register?.members[6][2] : "",
          rank: register?.members[6][3] ? register?.members[6][3] : "",
          level: register?.members[6][4] ? register?.members[6][4] : "",
        },
      ],
      bank: {
        img: metaDataPayment
          ? metaDataPayment
          : "https://cdn.discordapp.com/attachments/956724850079195196/985444295421071380/5448996.jpg",
        timpstamp: new Date(),
      },
    })
      .then((snap) => nextPage(5))
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  // const validate = ValidateData().split("_");
  // const checkData = () => {
  //   // if (register) console.log(register);
  //   //CHECK TEAM DETAILS
  //   if (validate[0] !== "TEAM") {
  //     setValidateTeam(2);
  //   } else if (validate[0] !== "MEMBER") {
  //     setValidateMember(2);
  //   } else if (validate[0] !== "BANK") {
  //     setValidateBank(2);
  //   } else {
  //     setValidateTeam(1);
  //     setValidateBank(1);
  //     setValidateMember(1);
  //   }
  //   //CHECK MEMBER'S DETAILS
  //   //CHECK BANK DETAILS
  // };
  // return checkData();
  // }, []);
  // logo: logo,
  // payment: payment,
  return (
    <Grid container spacing={2} rowSpacing={1}>
      <Grid item md={12}>
        <p>Team Details</p>
      </Grid>
      <Grid item md={12}>
        {isValidateTeam === 0 ? (
          <div className="loading">
            <Skeleton variant="rectangular" width={400} height={30} />
            <Skeleton variant="circular" width={40} height={40} />
          </div>
        ) : isValidateTeam === 2 ? (
          <div className="details">ok</div>
        ) : (
          <div className="details">mo</div>
        )}
      </Grid>
      <Grid item md={12}>
        <p>Member's Details</p>
      </Grid>
      <Grid item md={12}>
        {isValidateMember === 0 ? (
          <div className="loading">
            <Skeleton variant="rectangular" width={400} height={30} />
            <Skeleton variant="circular" width={40} height={40} />
          </div>
        ) : isValidateTeam === 2 ? (
          <div className="details">ok</div>
        ) : (
          <div className="details">mo</div>
        )}
      </Grid>
      <Grid item md={12}>
        <p>Bank Details</p>
      </Grid>
      <Grid item md={12}>
        {isValidateBank === 0 ? (
          <div className="loading">
            <Skeleton variant="rectangular" width={400} height={30} />
            <Skeleton variant="circular" width={40} height={40} />
          </div>
        ) : isValidateTeam === 2 ? (
          <div className="details">ok</div>
        ) : (
          <div className="details">mo</div>
        )}
      </Grid>
      <Grid item md={12} className="flex justify-center items-center">
        qr
      </Grid>
      <Grid item md={6}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={(e) => nextPage(3)}
        >
          Back
        </Button>
      </Grid>
      <Grid item md={6}>
        <Button variant="contained" fullWidth onClick={() => onHandleBtn()}>
          Submit
        </Button>
      </Grid>
      {/* <Grid item md={12} className="flex justify-center items-center">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => onHandleBtn()}
        >
          Submit
        </Button>
      </Grid> */}
    </Grid>
  );
}

export default Validate;
