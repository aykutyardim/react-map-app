// core
import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
// service
import { validatePosition } from "../../services/Form/FormService";
// constants
import {
  INITIAL_CENTER,
  ZOOM,
  MAX_ZOOM,
} from "../../constants/Map/MapConstants";

export default function CustomMapContainer(props) {
  const { children, markerPosition, ...rest } = props;
  return (
    <div>
      <MapContainer
        style={{ height: "95vh", width: "95wh" }}
        className="markercluster-map"
        center={INITIAL_CENTER}
        zoom={ZOOM}
        maxZoom={MAX_ZOOM}
        {...rest}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markerPosition.lat &&
          markerPosition.lng &&
          validatePosition(markerPosition.lat, markerPosition.lng) && (
            <Marker position={markerPosition}>
              <Popup>
                {markerPosition.lat},{markerPosition.lng}
              </Popup>
            </Marker>
          )}
        {children}
      </MapContainer>
    </div>
  );
}

CustomMapContainer.propTypes = {
  markerPosition: PropTypes.object,
  children: PropTypes.node,
};
