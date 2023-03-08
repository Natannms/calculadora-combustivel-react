import React, { useEffect, useState } from 'react' ;
import { GoogleMap, useJsApiLoader, Marker, Polyline } from '@react-google-maps/api';
import './index.css'

const GoogleMaps = () => {  
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAjZIpffr4pVYe9wXztCfbR8w80YcWddTc"
      });

      const [latitude, setLatitude] = useState(-19.832396964981992)
      const [longitude, setLongitude] = useState(-43.89647552262991)
      const [routePath, setRoutePath] = useState([
        {lat: -19.832396964981992,lng: -43.89647552262991 },
        {lat:-19.832487, lng:-43.896594},
        {lat: -19.832562, lng: -43.896911},
        {lat:-19.834005, lng:-43.897695},
        {lat:-19.833233, lng:-43.903540},
        {lat:-19.833259, lng: -43.903619},
        {lat:-19.833937, lng: -43.903953}
      ]);
      
      
     useEffect(()=>{
        // setInterval(() => {
        //     setLatitude(latitude +  ( Math.random() / 100))
        //     setLongitude(longitude +  ( Math.random() / 100))
        //     setRoutePath((prevRoutePath) => [      ...prevRoutePath,      { lat: latitude, lng: longitude },    ]);
        // }, 3000);
     },[latitude, longitude]);

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {isLoaded && <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100vh' }}
                center={{
                    lat: latitude,
                    lng: longitude
                }}
                zoom={15}
            >
                <Marker
                position={{
                    lat: latitude,
                    lng: longitude
                }}
                options={{
                    label: {
                        text: "Sua Posição",
                        className: "map-marker"
                    }
                }}/>

                 <Polyline
                    path={routePath}
                    options={{
                        strokeColor: "#FF0000",
                        strokeOpacity: 1,
                        strokeWeight: 3,
                    }}
                    />
            </GoogleMap>}
        </div>
    );  

}
export default GoogleMaps; 
