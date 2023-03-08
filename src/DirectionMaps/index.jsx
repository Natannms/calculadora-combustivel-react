import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker, Polyline, DirectionsService, DirectionsRenderer, DistanceMatrixService } from '@react-google-maps/api';
import './index.css'

const GoogleMaps = ({ data }) => {
    const { origem, destino, setDistance, distance, eventMap } = data
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAjZIpffr4pVYe9wXztCfbR8w80YcWddTc"
    });


    const [direction, setDirection] = useState(null);
    const [latitude, setLatitude] = useState(-19.832396964981992)
    const [longitude, setLongitude] = useState(-43.89647552262991)



    const directionsCallback = useMemo(() => {
        return (result) => {
            if (result !== null) {
                setDirection(result);
            }
        };
    }, []);

    // const handleDirectionsCallback = (result) => {
    //     if (result !== null) {
    //       setDirection(result);
    //     }
    //   };

    const handleDirectionsCallback = useCallback((result) => {
        if (result !== null) {
            setDirection(result);
        }
    }, [origem, destino]);

    return (
        <div style={{ height: '100vh', width: '100%' }}>

            {isLoaded &&
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100vh' }}
                    center={{
                        lat: latitude,
                        lng: longitude
                    }}
                    zoom={15}
                >
                    <DirectionsService options={{
                        origin: origem,
                        destination: destino,
                        travelMode: 'DRIVING',
                    }} callback={handleDirectionsCallback} />

                    {direction !== null && eventMap && (
                        <DirectionsRenderer
                            directions={direction}
                            options={{
                                polylineOptions: {
                                    strokeColor: 'blue',
                                },
                            }}
                        />
                    )}

                    <Marker position={{ lat: -23.5489, lng: -46.6388 }} />
                    <Marker position={{ lat: -22.9068, lng: -43.1729 }} />
                    {eventMap &&
                        <DistanceMatrixService
                            options={{
                                origins: [origem],
                                destinations: [destino],
                                travelMode: 'DRIVING',
                            }}
                            callback={(response) => {
                                if (response !== null && response.rows[0].elements[0].distance !== null) {
                                    let fm = parseFloat(response.rows[0].elements[0].distance.text.replace("km", "").replace(",", "."))
                                    setDistance(fm);
                                }
                            }}
                        />
                    }
                </GoogleMap>}
        </div>
    );

}
export default GoogleMaps; 
