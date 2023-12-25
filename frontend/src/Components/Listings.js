import { AppBar, Button, Card, CardContent, CardHeader, CardMedia, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import houseIconPng from './Assets/Mapicons/house.png';
import appartmentIconPng from './Assets/Mapicons/apartment.png';
import officeIconPng from './Assets/Mapicons/office.png';
import { Icon } from "leaflet";

// import myListings from "./Assets/Data/Dummydata";

function Listings() {

    // Test API
    // fetch("http://127.0.0.1:8000/api/listings/")
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));

    const position = [10.733459815418502, 106.6269602586756];
    const houseIcon = new Icon({
        iconUrl: houseIconPng,
        iconSize: [40, 40]
    });
    const appartmentIcon = new Icon({
        iconUrl: appartmentIconPng,
        iconSize: [40, 40]
    });
    const officeIcon = new Icon({
        iconUrl: officeIconPng,
        iconSize: [40, 40]
    });

    const [allListings, setAllListings] = useState([]);
    const [dataIsLoading, setDataIsLoading] = useState(true);

    useEffect(() => {
        async function GetAllListings() {
            const response = await Axios.get("http://127.0.0.1:8000/api/listings/");
            // console.log(response.data);
            setAllListings(response.data);
            setDataIsLoading(false);
        }
        GetAllListings();
    }, []);

    console.log(allListings);

    if (dataIsLoading === true) {
        return (
            <Grid container justifyContent="center" alignItems="center" style={{height: "100vh"}}>
                <CircularProgress />
            </Grid>
        );
    }

    return (
        <Grid container>
            <Grid item xs={4}>
                {allListings.map((listing) => {
                    return (
                        <Card key={listing.id} sx={{
                            margin: '1rem',
                            border: '1px solid black',
                            position: 'relative'
                        }}>
                            <CardHeader title={listing.title} />
                            <CardMedia 
                                component="img"
                                image={listing.picture1}
                                alt={listing.title}
                                sx={{
                                    paddingRight: '1rem',
                                    paddingLeft: '1rem',
                                    height: '20rem',
                                    width: '30rem'
                                }}
                            />
                            <CardContent>
                                <Typography variant="body2">
                                    {listing.description.substring(0,100)} ...
                                </Typography>
                            </CardContent>

                            {listing.property_status === 'Sale' ? (
                                <Typography sx={{
                                    position: 'absolute',
                                    background: 'green',
                                    zIndex: '1000',
                                    color: 'white',
                                    top: '100px',
                                    left: '20px',
                                    padding: '5px'
                                }}>
                                    {listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ
                                </Typography>
                            ): (
                                <Typography sx={{
                                    position: 'absolute',
                                    background: 'blue',
                                    zIndex: '1000',
                                    color: 'white',
                                    top: '100px',
                                    left: '20px',
                                    padding: '5px'
                                }}>
                                    {listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ / {listing.rental_frequency}
                                </Typography>
                            )}

                            
                        </Card>
                    );
                })}
            </Grid>
            <Grid item xs={8} style={{marginTop: '0.5rem'}}>
                <AppBar position="sticky">
                    <div style={{height:'100vh'}}>
                        <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {allListings.map((listing)=>{
                                function IconDisplay() {
                                    if (listing.listings_type === 'House'){
                                        return houseIcon;
                                    }
                                    else if (listing.listings_type === 'Apartment') {
                                        return appartmentIcon;
                                    }
                                    else {
                                        return officeIcon;
                                    }
                                }
                                return (
                                    <Marker 
                                        key={listing.id} 
                                        position={
                                            [listing.location.coordinates[0], listing.location.coordinates[1]]
                                            } 
                                        icon={IconDisplay()}>
                                            <Popup>
                                                <Typography variant="h5">
                                                    {listing.title}
                                                </Typography>
                                                <img 
                                                    src={listing.picture1} 
                                                    style={{width:'15rem', height:'10rem'}}
                                                    alt={listing.title} 
                                                />
                                                <Typography variant="body1">
                                                    {listing.description.substring(0, 100)} ...
                                                </Typography>
                                                <Button variant="contained" fullWidth>
                                                    Xem chi tiết
                                                </Button>
                                            </Popup>
                                    </Marker>
                                )
                            })}
                            {/* <Marker icon={houseIcon} position={position}>
                                <Popup>
                                    <Typography variant="h4">Nhà tôi</Typography>
                                    <img src={img1} style={{width:'15rem'}} />
                                    <Typography variant="body1">Đây là nhà tôi</Typography>
                                    <Button variant="contained" fullWidth>Mua ngay</Button>
                                </Popup>
                            </Marker> */}
                        </MapContainer>
                    </div>
                </AppBar>
            </Grid>
        </Grid>
    );
}

export default Listings;