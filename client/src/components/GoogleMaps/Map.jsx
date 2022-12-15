import React from 'react'
import  GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'


const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
);

const Mapsection = () => {
  const location = {
    address: 'Baylor Scott & White Medical Center – College Station',
    lat:30.58254420899421,
    lng:-96.27917886514233
  };
  const zoomLevel = 15;


  return (
     <div className="map">

     <h2 className="map-h2">Resources Redommendation</h2>

       <div className="google-map">
         <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyCtPKCgdO1_r_KrOnha4o9ij_oeyotq-_A' }}
           defaultCenter={location}
           defaultZoom={zoomLevel}
         >
           <LocationPin
             lat={location.lat}
             lng={location.lng}
             text={location.address}
           />
         </GoogleMapReact>
       </div>
     </div>
  )

}


export default Mapsection
