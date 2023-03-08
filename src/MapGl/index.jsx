import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './index.css'
import { Polyline } from 'react-leaflet';

const GoogleMaps = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAjZIpffr4pVYe9wXztCfbR8w80YcWddTc"
    });
    const [latitude, setLatitude] = useState(-19.832396964981992)
    const [longitude, setLongitude] = useState(-43.89647552262991)
    const [routePath, setRoutePath] = useState([{ lat: -19.832396964981992, lng: -43.89647552262991 }]);


    useEffect(() => {
        setInterval(() => {
            // setLatitude(latitude +  ( Math.random() / 100))
            // setLongitude(longitude +  ( Math.random() / 100))
            setRoutePath((prevRoutePath) => [      ...prevRoutePath,      { lat: latitude, lng: longitude },    ]);
        }, 5000);
    });

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {isLoaded && <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100vh' }}
                center={{
                    lat: latitude,
                    lng: longitude
                }}

                zoom={20}
            >
                <Marker position={{
                    lat: latitude,
                    lng: longitude
                }} />
                 {/* <Polyline
                    path={routePath}
                    options={{
                        strokeColor: "#FF0000",
                        strokeOpacity: 1,
                        strokeWeight: 3,
                    }}
                    /> */}
            </GoogleMap>}
        </div>
    );

}
export default GoogleMaps; 
