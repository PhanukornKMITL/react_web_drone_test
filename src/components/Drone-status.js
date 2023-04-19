import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Typography } from "@material-ui/core";
import DroneCard from "./DroneCard";

function DroneStatus() {
  const [filter, setFilter] = React.useState('');
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

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
    <div className="wrapper">
      <div className="header" style={{display: "flex", justifyContent:"space-between"}}>
        <div
          style={{
            background: "#0499b3",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            padding: '10px'
          }}
        >
          <Typography sx={{padding:"20px"}}>อัปเดทล่าสุด 0000000000</Typography>
        </div>
        <FormControl sx={{width:"30%", borderRadius: '10px', background:'white'}}>
          <Select
           displayEmpty
           inputProps={{ 'aria-label': 'Without label' }}
            value={filter}
            onChange={handleFilterChange}
             sx={{ width: "100%", borderRadius:'10px' }}
          >
            <MenuItem value={10}>ทั้งหมด</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div
        className="card-section"
        style={{marginTop: '20px'}}
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
