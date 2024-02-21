import { useNavigate } from "react-router";

import Icon from "@components/atoms/Icon";
import Img from "@components/atoms/Img";

import styled from "styled-components";
import {
  ContainerIncludingImg,
  InnerContainerIncludingImg,
  ContainerNameAndIcon,
} from "@styles/Container";
import Text from "@styles/Text";

const PetInfo = ({ petId, img, name, interested, breed, age, gender, shelter, onClick }) => {
  return (
    <ContainerIncludingImg flexDirection="row" onClick={onClick}>
      <Img src={img} size="Middle" />
      <InnerContainerIncludingImg justifyContent="space-between">
        <StyledPetInfo_1_1>
          <ContainerNameAndIcon>
            <Text fontWeight="700">{name}</Text>
            <Icon src={interested ? "IconHeartSelected" : "IconHeartOff"} />
          </ContainerNameAndIcon>
          <Text fontSize="14px">{breed}</Text>
          <Text fontSize="14px">
            {age}, {gender}
          </Text>
        </StyledPetInfo_1_1>
        <StyledShelter>
          <Icon src="IconPinLocation" width="14px" />
          <Text fontSize="12px" color={(props) => props.theme.colors.gray}>
            {shelter}
          </Text>
        </StyledShelter>
      </InnerContainerIncludingImg>
    </ContainerIncludingImg>
  );
};

const StyledPetInfo_1_1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledShelter = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default PetInfo;
