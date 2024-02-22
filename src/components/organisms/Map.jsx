import GoogleMapReact from "google-map-react";

import styled from "styled-components";

import { GOOGLE_MAP_API_KEY } from "@utils/utils";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ lat, lng }) => {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 12,
  };

  return (
    <StyledMap>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
    </StyledMap>
  );
};

const StyledMap = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
`;

export default Map;
