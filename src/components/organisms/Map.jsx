import GoogleMapReact from "google-map-react";

import styled from "styled-components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ lat, lng }) => {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 11,
  };

  return (
    <StyledMap>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_API_KEY" }} // API key 발급받아 넣기
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
