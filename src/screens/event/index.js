import { Button, Grid } from "@mui/material";
import React from "react";
import "./style.scss";
import Img1 from "../../asset/Polygon.png";
function EventDetails() {
  const DATA = [
    {
      what: "registation start",
      when: { date: "22/10/07", time: "12:00AM" },
      desc: "link",
      Whare: "link",
      forMore: "",
    },
  ];
  return (
    <div className="event-details">
      <div className="notice">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="time-table ">
        <table border={1}>
          <thead>
            <tr>
              <th rowSpan={2}>#</th>
              <th rowSpan={2}>What</th>
              <th colSpan={2}>When</th>
              <th rowSpan={2}>Description</th>
              <th rowSpan={2}>Whare</th>
              <th rowSpan={2}>For More</th>
            </tr>
            <tr>
              <th>date</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((d, i) => (
              <tr>
                <td>#0{i}</td>
                <td className="px-10">{d.what}</td>
                <td>{d.when.date}</td>
                <td>{d.when.time}</td>
                <td className="text-center px-5">{d.desc}</td>
                <td className="text-center">{d.Whare}</td>
                <td>{d.forMore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <div className="card">
      <div className="img-notice ">
        <img src={Img1} alt="img-notice" />
      </div>
      <div className="details">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque
          iste at, fugiat non fugit debitis consequuntur nostrum vel id,
          mollitia cupiditate, ipsa accusantium.
        </p>
        <div className="btn flex justify-between items-center mt-2">
          <Button>Find More</Button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
