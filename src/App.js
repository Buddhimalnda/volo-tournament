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
import Countdown from "react-countdown";
import "./App.scss";
import Agents from "./components/header/images/1";
import Mid from "./components/header/mid";
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
      <Mid />
      <div className="agent">
        <Agents />
      </div>
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
