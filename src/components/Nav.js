import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "../css/Nav.css";
import { Button } from "@mui/material";

function Nav(props) {
  console.log("test", props);
  const handleMenuClick = (index) => {
    props.onPageChange(index);
  };

  return (
    <div className="navigation">
      <div className="top-section">
        <AppBar
          component="nav"
          position="relative"
          style={{ backgroundColor: "#262626" }}
        >
          <Toolbar sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            ></IconButton>
            <Typography>Monday - Friday: 8.00 am to 5.00 pm</Typography>
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

        <div
          style={{ background: "#cdf475", width: "100%", height: "10px" }}
        ></div>

        <AppBar
          component="nav"
          position="relative"
          style={{ backgroundColor: "#ffffff" }}
        >
          <Toolbar sx={{ display: "flex" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
            ></IconButton>
            <Typography sx={{ color: "#636363" }}>
              Monday - Friday: 8.00 am to 5.00 pm
            </Typography>
            <div className="info-section" style={{ marginLeft: "auto", color: "#636363" }}>
              <div className="tel-info" style={{ margin: "10px", color: "#636363" }}>
                <Button>ภาพถ่ายทางอากาศ</Button>
              </div>
              <div className="mail-info" style={{ margin: "10px", color: "#636363" }}>
                <Button
                  sx={{ color: "#636363" }}
                  onClick={() => handleMenuClick(1)}
                >
                  สถานะอากาศยาน
                </Button>
              </div>
              <Button
                sx={{ color: "#636363" }}
                onClick={() => handleMenuClick(2)}
              >
                ปฏิทิน
              </Button>
              <Avatar alt="Remy Sharp" src="" />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Nav;
