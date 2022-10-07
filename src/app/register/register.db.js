import { doc, setDoc } from "firebase/firestore";
import { fs } from "../config.firebase";

export const registerFirestore = ({ data }) => {
  setDoc(doc(fs, "register-temp", data.team.name), data)
    .then((d) => console.log(d))
    .catch((err) => console.log(err.code));
};
