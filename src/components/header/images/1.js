import React from "react";
import "./style.scss";
import Neon from "../../../asset/neon.png";
import Reyna from "../../../asset/Reyna.png";

function Agents() {
  return (
    <div className="imgs">
      <img src={Neon} alt="Neon" className="flips" />
      <img src={Reyna} alt="Reyna" />
    </div>
  );
}

export default Agents;
