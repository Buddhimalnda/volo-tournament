import {
  AddBox,
  AddCircleOutline,
  Dashboard,
  Facebook,
  Hub,
  ScoreOutlined,
  Search,
  Wifi1Bar,
  YouTube,
} from "@mui/icons-material";
import { Box, Button, Link, SpeedDial, SpeedDialAction } from "@mui/material";
import "./App.scss";
import Agents from "./components/header/images/1";
// import Img1 from "./asset/Polygon 1.png";
import Navbar from "./components/nav";

function App() {
  const actions = [
    { icon: <Facebook />, name: "Facebook" },
    { icon: <YouTube />, name: "YouTube" },
    { icon: <Dashboard />, name: "Dashboard" },
    { icon: <Search />, name: "Search" },
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="img">
        {/* <img src={Img1} alt="Polygon" /> */}
        {/* <div className="inside"> */}
        <div className="logo">
          <h1>IGNITION</h1>
        </div>
        <div className="btn-group">
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
      <Agents />
      <Box
        sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}
        className="fixed bottom-1 right-0"
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<Hub />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
}

export default App;
