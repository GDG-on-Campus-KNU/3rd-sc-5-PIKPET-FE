import GoogleMapReact from "google-map-react";
import { useCallback, useEffect, useRef } from "react";

import styled from "styled-components";

import { GOOGLE_MAP_API_KEY } from "@utils/utils";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ lat, lng }) => {
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: lat, lng: lng },
      zoom: 12,
    });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return <StyledMap ref={mapRef} />;
};

const StyledMap = styled.div`
  width: 100%;
  height: calc(100vh - 54px);
`;

export default Map;
