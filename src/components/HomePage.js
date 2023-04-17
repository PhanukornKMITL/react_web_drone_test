import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Nav from "./Nav";
import DroneCard from "./DroneCard";
import "../css/HomePage.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DroneStatus from "./Drone-status";
import CalendarPage from "./Calendar";

function Drone() {
  const [pageIndex, setPageIndex] = useState(0);
  const handleMenuClick = (index) => {
    setPageIndex(index);
  };
  return (
    <div className="homepage">
      <div className="top-section">
        <Nav onPageChange={handleMenuClick} />
      </div>
      <div className="mid">
        {/* {pageIndex === 0 && <DroneStatus />} */}
        {pageIndex === 1 && <DroneStatus />}
        {pageIndex === 2 && <CalendarPage />}
      </div>
    </div>
  );
}

export default Drone;
