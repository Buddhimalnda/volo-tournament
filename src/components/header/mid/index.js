import { Button } from "@mui/material";
import React from "react";
import Countdown from "react-countdown";
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
          <Countdown date={Date.now() + 10000} />
          <div className="grid">
            <div className="col col-span-10">
              {/* <div className="btn btn-register">Register</div> */}
              <Button variant="outlined" className="btn w-full">
                Register
              </Button>
            </div>
            <div className="col-span-2 flex ">
              {/* <div className="btn btn-register"></div> */}
              <Button variant="outlined" className="btn">
                About Us
              </Button>
              <Button variant="outlined" className="btn">
                Rules & guild lines
              </Button>
              {/* <div className="btn btn-register"></div> */}
            </div>
          </div>
        </div>
        <p className="z-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          itaque repellendus ea hic repudiandae totam alias accusamus sed, nam
          animi, cum, minima ullam sint! Voluptate a impedit iusto obcaecati
          hic.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Mid;
