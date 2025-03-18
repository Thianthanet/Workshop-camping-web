import { MapContainer } from "react-leaflet"
import Layer from "./Layer"


const MapHome = () => {
    return (
        <div>
            <MapContainer
                className="h-[50vh] rounded-md z-0"
                center={[17.239365683906968, 102.24097967147829]}
                zoom={6}
                scrollWheelZoom={true}
            >
                <Layer />
            </MapContainer>
        </div>
    )
}
export default MapHome