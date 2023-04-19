import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function DroneCard({cardData}) {
//    const  cardData  = cardData; // รับ props เข้ามาเพื่อกำหนดค่าใน card
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: '10px'
      }}
    >
      <CardMedia
        sx={{ height: 140, width: '50%' }}
        image={cardData.image}
        title={cardData.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardData.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default DroneCard;
