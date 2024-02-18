import { useNavigate } from "react-router";

import Icon from "@components/atoms/Icon";
import Img from "@components/atoms/Img";

import styled from "styled-components";
import Text from "@styles/Text";
import Container from "@styles/Container";

const PetInfo = ({ petId, img, name, interested, breed, age, gender, shelter }) => {
  const navigate = useNavigate();

  const goPetInfoDetail = (pedId) => {
    navigate(`/search/result/${petId}`);
  };

  return (
    <StyledPetInfo onClick={(petId) => goPetInfoDetail(petId)}>
      <Img src={img} size="Middle" />
      <StyledPetInfo_1>
        <StyledPetInfo_1_1>
          <StyledNameAndIcon>
            <Text fontWeight="700">{name}</Text>
            <Icon src={interested ? "IconHeartSelected" : "IconHeartOff"} />
          </StyledNameAndIcon>
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
      </StyledPetInfo_1>
    </StyledPetInfo>
  );
};

const StyledPetInfo = styled(Container)`
  padding: 0;
  gap: 0;
  flex-direction: row;
  cursor: pointer;
`;

const StyledPetInfo_1 = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledPetInfo_1_1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledNameAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledShelter = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default PetInfo;
