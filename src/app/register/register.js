import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useSelector } from "react-redux";
import { storage } from "../config.firebase";

export const ValidateFirst = (data) => {
  const [error, setError] = useState([]);
  // return false;
  // const data = useSelector((state) => state.register);
  if (!data?.team?.name) {
    setError([...error, "TEAM_NAME"]);
  } else if (!data?.team?.leader) {
    setError([...error, "TEAM_LEADER"]);
  } else if (!data?.team?.whatsapp) {
    setError([...error, "TEAM_WHATSAPP"]);
  } else if (!data?.team?.email) {
    setError([...error, "TEAM_EMAIL"]);
  } else if (!data?.team?.discode?.name) {
    setError([...error, "TEAM_DISNAME"]);
  } else if (!data?.team?.discode?.id) {
    setError([...error, "TEAM_DISID"]);
  } else {
    setError(false);
  }
  return error;
  // if (!data?.bank) {
  //   return "BANK";
  // }
  //  else {
  //   return "SUCCESS";
  // }
};
export function ValidateTwo() {
  // return false;
  const data = useSelector((state) => state.register);

  for (let i = 0; i < 5; i++) {
    if (!data?.members[i][0]) {
      return "MEMBER_NAME_" + (i + 1);
    } else if (!data?.members[i][1]) {
      return "MEMBER_ROITID_" + (i + 1);
    } else if (!data?.members[i][2]) {
      return "MEMBER_TAG_" + (i + 1);
    } else if (!data?.members[i][3]) {
      return "MEMBER_RANK_" + (i + 1);
    } else if (!data?.members[i][4]) {
      return "MEMBER_LEVEL_" + (i + 1);
    }
  }
}
export function RegisterSubmit() {}
export const UploadLogo = (img, type) => {
  const [metaDatalogo, setMetadatalogo] = useState();
  const [metaDataPayment, setMetadataPayment] = useState();
  const data = useSelector((state) => state.register);
  const folder = type === 0 ? "logos" : "payments";
  const spaceRef = ref(
    storage,
    folder + "/team-" + folder + "-" + data?.team?.name.split(" ")[0]
  );
  const uploadTask = uploadBytes(spaceRef, img);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      if (type === 0)
        getDownloadURL(spaceRef).then((url) => setMetadatalogo(url));
      else getDownloadURL(spaceRef).then((url) => setMetadataPayment(url));
    },
    (error) => {
      console.log(error);
    }
  );
  return type === 0 ? metaDatalogo : metaDataPayment;
};
