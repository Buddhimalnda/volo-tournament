import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

import "./style.scss";

import { useCountdown } from "./Coundown";

function CountdownUI() {
  const THREE_DAYS_IN_MS = 10 * 24 * 60 * 60 * 1000;

  const [NOW_IN_MS, setNOW_IN_MS] = useState(new Date().getTime());

  useEffect(() => {
    setNOW_IN_MS(new Date().getTime());
  }, []);

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);
  return (
    <div className="countdown">
      <div className="countdown-card">
        <div className="card flex items-center flex-col">{days}</div>:
        <div className="card">{hours}</div>:
        <div className="card">{minutes}</div>:
        <div className="card">{seconds}</div>
      </div>
      {/* <Countdown date={Date.now() + 10000} /> */}
    </div>
  );
}

export default CountdownUI;
