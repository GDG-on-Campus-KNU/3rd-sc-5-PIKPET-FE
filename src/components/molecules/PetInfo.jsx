import Icon from "@components/atoms/Icon";
import Img, { ImgGroup } from "@components/atoms/Img";
import Container from "@components/molecules/Container";
import samplePicture from "@assets/sample-picture.png";

import styled from "styled-components";
import Text from "@styles/Text";

const PetInfo = ({ name, interested, breed, age, gender, shelter }) => {
  return (
    <Container paddingX="0" paddingY="0">
      <Img src={samplePicture} size="Middle" />
      <div>
        <div>
          <Text fontWeight="700">{name}</Text>
          <Icon src={interested ? "IconHeartSelected" : "IconHeartOff"} />
        </div>
        <Text fontSize="14px">{breed}</Text>
        <Text fontSize="14px">
          {age}, {gender}
        </Text>
      </div>
      <div>
        <Icon src="IconPinLocation" />
        <Text fontSize="12px">{shelter}</Text>
      </div>
    </Container>
  );
};

export default PetInfo;
