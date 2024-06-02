import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MyApartment = () => {
  const [position, setPosition] = useState([51.505, -0.09]);

  const LocationMarker = () => {
    const map = useMap();

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        const newPosition = [latitude, longitude];
        setPosition(newPosition);
        map.setView(newPosition, 13);
      });
    }, [map]);

    return (
      position && (
        <Marker position={position}>
        </Marker>
      )
    );
  };

  return (
    <div className=''>
      <div className='w-full relative z-30 '>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '50vh', width: '100%'}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
        </MapContainer>
      </div>

    </div>
  );
};

export default MyApartment;
