import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const position = [48.69200376858102, 21.262225386034235];
const zoomLevel = 15;

function MyMap() {
  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div>
      <MapContainer
        center={position}
        zoom={zoomLevel}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <div
              onClick={openInGoogleMaps}
              style={{
                cursor: "pointer",
                textAlign: "center",
                padding: "5px",
              }}
            >
              <strong>Q-Trucking</strong>
              <br />
              <small>Click to open in Google Maps</small>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MyMap;
