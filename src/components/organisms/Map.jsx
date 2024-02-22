import GoogleMapReact from "google-map-react";
import { GOOGLE_MAP_API_KEY } from "@utils/utils";

import Icon from "@components/atoms/Icon";

import styled from "styled-components";
import Text from "@styles/Text";

const Pin = ({ name }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <Icon src="IconPinLocation" width="36px" height="36px" />
    <Text fontSize="14px" fontWeight="500">
      {name}
    </Text>
  </div>
);

const Map = ({ lat, lng, name }) => {
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
        <Pin lat={lat} lng={lng} name={name} />
      </GoogleMapReact>
    </StyledMap>
  );
};

const StyledMap = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
`;

export default Map;
