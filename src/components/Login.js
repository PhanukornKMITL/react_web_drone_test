import React, { useState } from 'react';
import "../css/Login.css";
import Wallpaper from "../assets/wallpaper.jpg";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate  } from 'react-router-dom';




function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      <div className="logo-images">
        <h1>Test 1</h1>
        <h1>Test 2</h1>
        <h1>Test 3</h1>
      </div>
      <h5>นี่คือสถานแห่งบ้านทรายทอง</h5>
      <Grid
        container
        className="form-section"
        style={{ flexDirection: "column",backgroundColor: 'pink' }}
      >
        <Grid item xs={12}>
          <h1>เข้าสู่ระบบ</h1>
        </Grid>
        <Grid item xs={6} style={{backgroundColor: 'red'}} fullWidth>
          <TextField id="outlined-basic" label="Username" variant="outlined"  fullWidth/>
          <TextField id="outlined-basic"label="Password"variant="outlined"type="password" fullWidth/>
          <div className="option">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <Typography variant="overline" display="block" gutterBottom style={{ marginLeft: 'auto' }}>
              overline text
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth onClick={() => navigate('/home')}>Login</Button>
        </Grid>
      </Grid>
    </div>
  );
}



export default Login;
