import { AppBar, Grid, Typography } from "@mui/material";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Listings() {
    const position = [10.747398671197132, 106.62429910688128];
    return (
        <Grid container>
            <Grid item xs={4}>
                <Typography variant="h1">
                    BLANK SPACE
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <AppBar position="sticky">
                    <div style={{height:'100vh'}}>
                        <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </AppBar>
            </Grid>
        </Grid>
    );
}

export default Listings;