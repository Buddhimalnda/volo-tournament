import React from "react";
import Agents from "../../components/header/images/1";
import Mid from "../../components/header/mid";
import "./style.scss";
function Home() {
  return (
    <div>
      <Mid />
      <div className="agent">
        <Agents />
      </div>
    </div>
  );
}

export default Home;
