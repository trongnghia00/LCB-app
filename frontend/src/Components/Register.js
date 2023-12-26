import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useImmerReducer } from "use-immer";

function Register() {
    const navigate = useNavigate();

    const initialState = {
        usernameValue: '',
        emailValue: '',
        passwordValue: '',
        password2Value: '',
        sendRequest: 0
    }

    function ReducerFunction(draft, action) {
        switch (action.type) {
            case "changeUsername":
                draft.usernameValue = action.txtUsername;
                break;
            case "changeEmail":
                draft.emailValue = action.txtEmail;
                break;
            case "changePassword":
                draft.passwordValue = action.txtPassword;
                break;
            case "changePassword2":
                draft.password2Value = action.txtPassword2;
                break;
            case "changeSendRequest":
                draft.sendRequest = draft.sendRequest + 1;
                break;
            default:
                break;
        }
    }

    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

    const FormSubmit = (e) => {
        e.preventDefault();
        console.log("submited");
        dispatch({
            type: "changeSendRequest"
        });
    }

    useEffect(() => {
        if (state.sendRequest) {
            async function SignUp() {
                try {
                    const response = await Axios.post(
                        "http://127.0.0.1:8000/api-auth-djoser/users/",
                        {
                            username: state.usernameValue,
                            email: state.emailValue,
                            password: state.passwordValue,
                            re_password: state.password2Value
                        }
                    );
                    console.log(response);
                    navigate('/');
                } catch (error) {
                    console.log(error.response);
                }
            }
            SignUp();
        }
    }, [state.sendRequest]);

    return (
        <div className="formContainer">
            <form onSubmit={FormSubmit}>
                <Grid item container justifyContent="center">
                    <Typography variant="h4">
                        TẠO TÀI KHOẢN MỚI
                    </Typography>
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField 
                        id="username" 
                        label="Username" 
                        variant="outlined" 
                        fullWidth 
                        value={state.usernameValue}
                        onChange={(e)=>dispatch({
                            type: 'changeUsername',
                            txtUsername: e.target.value
                        })}
                    />
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField 
                        id="email" 
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        value={state.emailValue}
                        onChange={(e)=>dispatch({
                            type: 'changeEmail',
                            txtEmail: e.target.value
                        })}
                    />
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField 
                        id="password" 
                        label="Password" 
                        variant="outlined" 
                        fullWidth 
                        type="password" 
                        value={state.passwordValue}
                        onChange={(e)=>dispatch({
                            type: 'changePassword',
                            txtPassword: e.target.value
                        })}
                    />
                </Grid>
                <Grid item container style={{marginTop: "1rem"}}>
                    <TextField 
                        id="password2" 
                        label="Confirm Password" 
                        variant="outlined" 
                        fullWidth 
                        type="password" 
                        value={state.password2Value}
                        onChange={(e)=>dispatch({
                            type: 'changePassword2',
                            txtPassword2: e.target.value
                        })}
                    />
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