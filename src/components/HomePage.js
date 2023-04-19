import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Nav from "./Nav";
import "../css/HomePage.css";
import DroneStatus from "./Drone-status";
import CalendarPage from "./Calendar";
import Profile from "./Profile";

function Drone() {
  const [pageIndex, setPageIndex] = useState(0);
  console.log('Page ',pageIndex);
  const handleMenuClick = (index) => {
    setPageIndex(index);
  };
  return (
    <div className="homepage">
      <div className="top-section">
        <Nav onPageChange={handleMenuClick} />
      </div>
      <div className="mid">
        {pageIndex === 0 && <Profile />}
        {/*pageIndex === 1 && <Map />  */}
        {pageIndex === 2 && <DroneStatus />}
        {pageIndex === 3 && <CalendarPage />}
      </div>
    </div>
  );
}

export default Drone;
