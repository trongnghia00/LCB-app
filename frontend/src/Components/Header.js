import React, { useContext, useState } from "react";
import '../App.css';

import { Button, AppBar, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StateContext from "../Contexts/StateContext";
import DispatchContext from "../Contexts/DispatchContext";
import Axios from "axios";

function Header() {
    const navigate = useNavigate();
    const GlobalState = useContext(StateContext);
    const GlobalDispatch = useContext(DispatchContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    async function handleLogout() {
        setAnchorEl(null);
        try {
            const response = await Axios.post(
                "http://127.0.0.1:8000/api-auth-djoser/token/logout",
                GlobalState.userToken,
                {
                    headers:{
                        Authorization: 'Token '.concat(GlobalState.userToken)
                    }
                }
            );
            console.log(response);
            GlobalDispatch({type: 'logout'});
            navigate('/');
        } catch (e) {
            console.log(e.response);
        }
    }

    return (
        <AppBar position="static" style={{backgroundColor: 'black'}}>
            <Toolbar>
                <div className="leftNav">
                    <Button color="inherit" onClick={()=>navigate('/')}>
                        <Typography variant="h4">LCB - App</Typography>{" "}
                    </Button>
                </div>
                <div>
                    <Button color="inherit"  onClick={()=>navigate('/listings')} sx={{marginRight: '2rem'}}>
                        <Typography variant="h6">Listings</Typography>{" "}
                    </Button>
                    <Button color="inherit" sx={{marginLeft: '2rem'}}>
                        <Typography variant="h6">Agencies</Typography>{" "}
                    </Button>
                </div>
                <div className="rightNav">
                    <Button sx={{
                        bgcolor: 'green',
                        color: 'white',
                        width: '15rem',
                        fontSize: '1.1rem',
                        marginRight: '1rem',
                        '&:hover': {
                            backgroundColor: 'blue'
                        }
                    }}>Add property</Button>
                    {GlobalState.userUsername ? (
                        <Button onClick={handleClick} sx={{
                            bgcolor: 'white',
                            color: 'black',
                            width: '15rem',
                            fontSize: '1.1rem',
                            marginLeft: '1rem',
                            '&:hover': {
                                backgroundColor: 'green'
                            }
                        }}>{GlobalState.userUsername}</Button>
                    ) : (
                        <Button onClick={()=>navigate('/login')} sx={{
                            bgcolor: 'white',
                            color: 'black',
                            width: '15rem',
                            fontSize: '1.1rem',
                            marginLeft: '1rem',
                            '&:hover': {
                                backgroundColor: 'green'
                            }
                        }}>Login</Button>
                    )}
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleLogout} sx={{
                            color: '#eecc33',
                            backgroundColor: 'red',
                            width: '15rem',
                            fontWeight: 'bolder',
                        }}>Logout</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;