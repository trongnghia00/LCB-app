import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <div className="formContainer">
            <form>
                <Grid item container justifyContent="center">
                    <Typography variant="h4">
                        ĐĂNG NHẬP
                    </Typography>
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField id="username" label="Username" variant="outlined" fullWidth />
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField id="password" label="Password" variant="outlined" fullWidth type="password" />
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
                        ĐĂNG NHẬP
                    </Button> 
                </Grid>
            </form>
            <Grid item container justifyContent="center" style={{marginTop: "1rem"}}>
                <Typography variant="small">
                    Bạn chưa có tài khoản? <span style={{cursor:"pointer", color: "green"}} onClick={()=>navigate("/register")}>ĐĂNG KÝ</span> 
                </Typography>
            </Grid>
        </div>
    )
}

export default Login;