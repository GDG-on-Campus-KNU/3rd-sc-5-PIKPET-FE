import { useEffect } from "react";
import axios from "axios";

import PetInfoDetailItem from "@components/molecules/PetInfoDetailItem";
import ButtonTag from "@components/atoms/ButtonTag";
import ButtonMiniCTA from "@components/atoms/ButtonMiniCTA";
import Icon from "@components/atoms/Icon";
import Img from "@components/atoms/Img";

import styled from "styled-components";
import {
  ContainerIncludingImg,
  InnerContainerIncludingImg,
  ContainerNameAndIcon,
} from "@styles/Container";
import Text from "@styles/Text";

const FONT_SIZE = "14px";

const PetInfoDetail = ({
  petId,
  img,
  imgWidth,
  imgHeight,
  name,
  interested,
  breed,
  age,
  gender,
  height,
  weight,
  color,
  neutralized,
  diseasesList,
  checkupList,
  comment,
  shelter,
  ...rest
}) => {
  // 보호소 위치 보기
  const handleViewShelterLocation = () => {};

  return (
    <ContainerIncludingImg flexDirection="column">
      {/* 이미지 */}
      <Img src={img} alt="picture" size="Big" width={imgWidth} height={imgHeight} />

      <InnerContainerIncludingImg gap="24px">
        {/* 기본 정보 */}
        <ContainerBasicPetInfo>
          <ContainerNameAndIcon>
            <Text fontSize="20px" fontWeight="700">
              {name}
            </Text>
            <Icon src={interested ? "IconHeartSelected" : "IconHeartOff"} />
          </ContainerNameAndIcon>
          <ContainerBasicPetInfo_1>
            <Text fontSize={FONT_SIZE}>{breed}</Text>
            <Text fontSize={FONT_SIZE}>{`${age} year(s) old, ${gender}`}</Text>
            <Text fontSize={FONT_SIZE}>{`${height}cm, ${weight}kg`}</Text>
            <Text fontSize={FONT_SIZE}>{`${color}`}</Text>
          </ContainerBasicPetInfo_1>
        </ContainerBasicPetInfo>

        {/* 상세 정보 */}
        <PetInfoDetailItem title="Neutralized" content={neutralized}></PetInfoDetailItem>
        <PetInfoDetailItem title="Diseases" content={diseasesList}></PetInfoDetailItem>
        <PetInfoDetailItem
          title="Checkup/Vaccination"
          content={checkupList}
        ></PetInfoDetailItem>
        <PetInfoDetailItem title="Comment" content={comment}></PetInfoDetailItem>

        {/* 보호소 정보 */}
        <StyledShelter>
          <Icon src="IconPinLocation" width="14px" />
          <Text fontSize={FONT_SIZE} color={(props) => props.theme.colors.gray}>
            {shelter}
          </Text>
          <ButtonMiniCTA item="위치 보기" onClick={handleViewShelterLocation} />
        </StyledShelter>
      </InnerContainerIncludingImg>
    </ContainerIncludingImg>
  );
};

const ContainerBasicPetInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContainerBasicPetInfo_1 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  flex-wrap: wrap;
`;

const StyledShelter = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default PetInfoDetail;
