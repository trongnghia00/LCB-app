import React from "react";
import '../Home.css';

import { CssBaseline, Typography } from "@mui/material";
import { Button, AppBar, Toolbar } from "@mui/material";

function Home() {
    return (
        <>
            <CssBaseline />
            <AppBar position="static" style={{backgroundColor: 'black'}}>
                <Toolbar>
                    <div className="leftNav">
                        <Button color="inherit">
                            <Typography variant="h4">LCB - App</Typography>{" "}
                        </Button>
                    </div>
                    <div>
                        <Button color="inherit" sx={{marginRight: '2rem'}}>
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
                        <Button sx={{
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
        </>
    );
}

export default Home;