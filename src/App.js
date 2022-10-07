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
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Agents from "./components/header/images/1";
import Mid from "./components/header/mid";
import Home from "./screens/home";
// import Img1 from "./asset/Polygon 1.png";
import Navbar from "./components/nav";
import Register from "./screens/register";
import PlayerRegister from "./screens/register/player";
import Login from "./auth/login";
import Player from "./screens/player";
import AboutUs from "./screens/about";
import TeamDetails from "./screens/teams";
import EventDetails from "./screens/event";

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
      <Switch>
        <Route exact path="/">
          <Home />
          <Bottom actions={actions} />
        </Route>
        <Route path="/valo/register">
          <Register />
        </Route>
        <Route path="/valo/player/register">
          <PlayerRegister />
        </Route>
        <Route path="/valo/player/">
          <Player />
        </Route>
        <Route path="/admin/login">
          <Login />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/team">
          <TeamDetails />
        </Route>
        <Route path="/event">
          <EventDetails />
        </Route>
      </Switch>
    </div>
  );
}

const Bottom = ({ actions }) => {
  return (
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
  );
};

export default App;
