import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import '../App.css';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import DispatchContext from "../Contexts/DispatchContext";
import StateContext from "../Contexts/StateContext";

function Login() {
    const navigate = useNavigate();
    const GlobalDispatch = useContext(DispatchContext);
    const GlobalSate = useContext(StateContext);

    const initialState = {
        usernameValue: '',
        passwordValue: '',
        sendRequest: 0,
        token: ''
    }

    function ReducerFunction(draft, action) {
        switch (action.type) {
            case "changeUsername":
                draft.usernameValue = action.txtUsername;
                break;
            case "changePassword":
                draft.passwordValue = action.txtPassword;
                break;
            case "changeSendRequest":
                draft.sendRequest = draft.sendRequest + 1;
                break;
            case "catchtoken":
                draft.token = action.tokenValue;
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
            async function SignIn() {
                try {
                    const response = await Axios.post(
                        "http://127.0.0.1:8000/api-auth-djoser/token/login",
                        {
                            username: state.usernameValue,
                            password: state.passwordValue,
                        }
                    );
                    console.log(response);
                    dispatch({
                        type: 'catchtoken',
                        tokenValue: response.data.auth_token
                    });
                    GlobalDispatch({
                        type: 'catchtoken',
                        tokenValue: response.data.auth_token
                    });
                    // navigate('/');
                } catch (error) {
                    console.log(error.response);
                }
            }
            SignIn();
        }
    }, [state.sendRequest]);

    useEffect(() => {
        if (state.token !== '') {
            async function GetUserInfo() {
                try {
                    const response = await Axios.get(
                        "http://127.0.0.1:8000/api-auth-djoser/users/me",
                        {
                            headers:{
                                Authorization: 'Token '.concat(state.token)
                            }
                        }
                    );
                    console.log(response);
                    GlobalDispatch({
                        type: 'catchUserInfo',
                        usernameInfo: response.data.username,
                        emailInfo: response.data.email,
                        idInfo: response.data.id,
                    });
                    navigate('/');
                } catch (error) {
                    console.log(error.response);
                }
            }
            GetUserInfo();
        }
    }, [state.token]);

    return (
        <div className="formContainer">
            <form onSubmit={FormSubmit}>
                <Grid item container justifyContent="center">
                    <Typography variant="h4">
                        ĐĂNG NHẬP
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