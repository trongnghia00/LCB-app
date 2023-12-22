import React from "react";
import '../Home.css';
import city from './Assets/city.jpg';

import { Button, Typography } from "@mui/material";

function Home() {
    return (
        <>
            <div style={{position: 'relative'}}>
                <img src={city} className="cityImg" alt="city" />
                <div className="overlayText">
                    <Typography variant="h1" sx={{
                        color: 'white',
                        fontWeight: 'bolder'
                    }}>
                        Tìm <span style={{color: 'red'}}>ngôi nhà mơ ước</span> của bạn tại LCB-App
                    </Typography>
                    <Button variant="contained" sx={{
                        fontSize: '3.5rem',
                        borderRadius: '15px',
                        bgcolor: 'green',
                        marginTop: '2rem',
                        boxShadow: '3px 3px 3px white'
                    }}>Xem danh sách</Button>
                </div>
            </div>
        </>
    );
}

export default Home;