import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    return (
        <div className="formContainer">
            <form>
                <Grid item container justifyContent="center">
                    <Typography variant="h4">
                        TẠO TÀI KHOẢN MỚI
                    </Typography>
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField id="username" label="Username" variant="outlined" fullWidth />
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField id="email" label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField id="password" label="Password" variant="outlined" fullWidth type="password" />
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField id="password2" label="Confirm Password" variant="outlined" fullWidth type="password" />
                </Grid>
                <Grid item container xs={8} style={{marginTop: "1rem", marginLeft: "auto", marginRight: "auto" }}>
                    <Button variant="contained" fullWidth type="submit" sx={{
                        backgroundColor: "green",
                        color: "white",
                        fontSize: "1.1rem",
                        marginLeft: "1rem",
                        "&:hover": {
                            backgroundColor: "blue"
                        }
                    }}>
                        ĐĂNG KÝ
                    </Button> 
                </Grid>
            </form>
            <Grid item container justifyContent="center" style={{marginTop: "1rem"}}>
                <Typography variant="small">
                    Bạn đã có tài khoản? <span style={{cursor:"pointer", color: "green"}} onClick={()=>navigate("/login")}>ĐĂNG NHẬP</span> 
                </Typography>
            </Grid>
        </div>
    )
}

export default Register;