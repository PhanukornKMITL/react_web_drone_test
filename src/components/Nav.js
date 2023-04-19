import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "../css/Nav.css";
import { Button } from "@mui/material";
import React, { useState } from "react";

function Nav(props) {
  const [activeButton, setActiveButton] = useState(1);
  const buttons = [
    { id: 1, label: "ภาพถ่ายทางอากาศ" },
    { id: 2, label: "สถานะอากาศยาน" },
    { id: 3, label: "ปฏิทิน" },
  ];

  const handleMenuClick = (index) => {
    handleButtonClick(index);
    props.onPageChange(index);
  };

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <div className="navigation">
      <div className="top-section">
        <AppBar
          component="nav"
          position="relative"
          style={{ backgroundColor: "#262626", height: '30px' }}
        >
          <Toolbar
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              minHeight: "inherit",
              height: 'inherit'
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            ></IconButton>
            <Typography sx={{ flex: 1 }}>
              Monday - Friday: 8.00 am to 5.00 pm
            </Typography>
            <div className="info-section" style={{ marginLeft: "auto" }}>
              <div className="tel-info" style={{ margin: "10px" }}>
                <Typography>888</Typography>
              </div>
              <div className="mail-info" style={{ margin: "10px" }}>
                <Typography>mail.com</Typography>
              </div>
              <Typography className="username" style={{ margin: "10px" }}>
                Suda.K
              </Typography>
              <Avatar alt="Remy Sharp" src="" />
            </div>
          </Toolbar>
        </AppBar>
        <AppBar
          component="nav"
          position="relative"
          style={{ backgroundColor: "#ffffff"}}
        >
          <Toolbar sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            ></IconButton>
            <Typography>Test</Typography>
            <div
              className="info-section"
              style={{ marginLeft: "auto", color: "#636363" }}
            >
              {buttons.map((button) => (
                <div
                  key={button.id}
                  className="info-item"
                  style={{ margin: "10px" }}
                >
                  <Button
                    key={button.id}
                    className={activeButton === button.id ? "active" : ""}
                    sx={{ color: "#636363" }}
                    onClick={() => handleMenuClick(button.id)}
                  >
                    {button.label}
                  </Button>
                </div>
              ))}
              <Avatar alt="Remy Sharp" src="" />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Nav;
