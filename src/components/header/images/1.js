import React from "react";
import "./style.scss";
import Neon from "../../../asset/neon.png";
import Reyna from "../../../asset/KillJoy.png";

function Agents() {
  return (
    <div className="imgs agent">
      <img src={Neon} alt="Neon" className="flips" />
      <img src={Reyna} alt="Reyna" className="flips" />
    </div>
  );
}

export default Agents;
