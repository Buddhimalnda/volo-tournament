import React from "react";
import Img1 from "../../asset/Polygon.png";
import "./style.scss";
function AboutUs() {
  const DATA = [
    {
      title: "UOK",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a hic sit voluptatum reprehenderit fuga minus ratione vitae incidunt mollitia maxime accusamus iusto inventore est cupiditate, aspernatur voluptas, suscipit quod!",
      icon: Img1,
    },
    {
      title: "PE",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a hic sit voluptatum reprehenderit fuga minus ratione vitae incidunt mollitia maxime accusamus iusto inventore est cupiditate, aspernatur voluptas, suscipit quod!",
      icon: Img1,
    },
    {
      title: "Valorent",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a hic sit voluptatum reprehenderit fuga minus ratione vitae incidunt mollitia maxime accusamus iusto inventore est cupiditate, aspernatur voluptas, suscipit quod!",
      icon: Img1,
    },
    {
      title: "Ignition",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus a hic sit voluptatum reprehenderit fuga minus ratione vitae incidunt mollitia maxime accusamus iusto inventore est cupiditate, aspernatur voluptas, suscipit quod!",
      icon: Img1,
    },
  ];
  return (
    <div className="container-r relative">
      <div className="container text-light">
        <h1 className="text-center text-5xl mb-4">About us</h1>
        <div className="des text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ut in sit ab! Molestiae aliquam ipsam consectetur doloremque, voluptas
          fugit, architecto officia ducimus praesentium minima explicabo quo.
          Commodi, dolor expedita!
        </div>
        <div className="content">
          {DATA && DATA.map((d, i) => <Contents key={i} data={d} i={i} />)}
        </div>
      </div>
    </div>
  );
}

const Contents = ({ data, i }) => {
  if (i % 2 === 0)
    return (
      <div className="content-t">
        <div className="">
          <h3>{data.title}</h3>
          <p>{data.p}</p>
        </div>
        <div className="icon">
          <img src={data.icon} alt="icon" width={100} height={100} />
        </div>
      </div>
    );
  if (i % 2 === 1)
    return (
      <div className="content-t">
        <div className="icon">
          <img src={data.icon} alt="icon" width={100} height={100} />
        </div>
        <div className="">
          <h3>{data.title}</h3>
          <p>{data.p}</p>
        </div>
      </div>
    );
};
export default AboutUs;
