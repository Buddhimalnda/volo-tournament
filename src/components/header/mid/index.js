import { Button } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import CountdownUI from "../countdown";
import "./style.scss";

function Mid() {
  return (
    <div>
      <div className="img">
        {/* <img src={Img1} alt="Polygon" /> */}
        {/* <div className="inside"> */}
        <div className="logo">
          <h1>IGNITION</h1>
        </div>
        <div className="btn-group">
          <CountdownUI />
          <div className="grid">
            <div className="col col-span-10">
              {/* <div className="btn btn-register">Register</div> */}
              <Link to="/valo/register">
                <Button
                  variant="outlined"
                  className="btn w-full"
                  // onClick={() => window.location("/volo/register")}
                >
                  Register
                </Button>
              </Link>
            </div>
            <div className="col-span-2 flex ">
              {/* <div className="btn btn-register"></div> */}
              <Link to="/aboutus">
                <Button variant="outlined" className="btn">
                  About Us
                </Button>
              </Link>

              <Button variant="outlined" className="btn">
                Rules & guild lines
              </Button>
              {/* <div className="btn btn-register"></div> */}
            </div>
          </div>
        </div>
        <p className="z-50">
          With this initiative we plan on boarding all the ……….. together by
          organizing a competition which interest all most young souls of this
          age. Which is non other than an E sport competition
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Mid;
