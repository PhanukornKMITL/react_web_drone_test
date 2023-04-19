import Avatar from "@mui/material/Avatar";
import "../css/Profile.css";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="Profile">
      <div className="Profile-box">
        <Avatar
          alt="Profile Picture"
          src="#"
          sx={{ marginTop: "-70px", width: 80, height: 80 }}
        />
        <div className="user-info">
          <Typography>User Name</Typography>
          <Typography>ชื่อ-นามสกุล</Typography>
          <Typography>หน่วยงาน</Typography>
          <Typography>email</Typography>
          <Typography>ข้อมูลการติดต่อ</Typography>
        </div>

        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: "70px",
            borderRadius: "20px",
            background: "#30b3cd",
          }}
          onClick={() => navigate('/')}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default Profile;
