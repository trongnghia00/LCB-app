import React from "react";
import '../App.css';

import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
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
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;