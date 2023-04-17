import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Typography } from "@material-ui/core";
import DroneCard from "./DroneCard";

function DroneStatus() {
  const [droneList, setDroneList] = useState([
    {
      id: 1,
      title: "อาจารย์แดง",
      name: "Drone 1",
      image:
        "https://us-tuna-sounds-images.voicemod.net/8fab1c3e-1cb9-47b6-8fe3-699bc7c2aaa9-1655706403347.jpg",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Drone 2",
      image: "image2.jpg",
      description: "Description 2",
    },
    {
      id: 3,
      name: "Drone 3",
      image: "image3.jpg",
      description: "Description 3",
    },
  ]);
  
  return (
    <div>
      <div className="header">
        <Typography>อัปเดทล่าสุด</Typography>
        <Typography>วันที่....</Typography>
        <Box sx={{ minWidth: 200, marginLeft: "auto", marginTop: "20px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="age"
              label="Age"
              onChange=""
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div
        className="card-section"
        style={{ margin: "100px", background: "blue" }}
      >
        <Grid container spacing={5}>
          {droneList.map((drone) => (
            <Grid item xs={4}>
              <div className="Card" key={drone.id}>
                <DroneCard cardData={drone} />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
export default DroneStatus;
