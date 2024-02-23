import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { usePetInfoDetailStore } from "@store";

import PetInfoDetailItem from "@components/molecules/PetInfoDetailItem";
import ButtonMiniCTA from "@components/atoms/ButtonMiniCTA";
import ButtonTag from "@components/atoms/ButtonTag";
import Icon from "@components/atoms/Icon";
import Img from "@components/atoms/Img";
import sampleImg from "@assets/sample-picture-2.jpeg";

import styled from "styled-components";
import {
  ContainerIncludingImg,
  InnerContainerIncludingImg,
  ContainerNameAndIcon,
} from "@styles/Container";
import Text from "@styles/Text";

const FONT_SIZE = "14px";

// 문자열 포맷팅 BEAGLE -> Beagle =====================================
const formatString = (word) => {
  if (typeof word !== "string" || word.length === 0) {
    return "null"; // 혹은 다른 기본값을 반환할 수 있음
  }

  // 단어를 공백으로 구분하여 배열로 분할
  const words = word.split("_");
  // 각 단어의 첫 글자를 대문자로 변환하고, 나머지 글자는 소문자로 변환하여 새로운 배열 생성
  const formattedString = words.map(
    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );

  // 배열을 공백으로 연결하여 하나의 문자열로 반환
  return formattedString.join(" ");
};

const PetInfoDetail = () => {
  const navigate = useNavigate();
  const { petInfoDetail, setPetInfoDetail } = usePetInfoDetailStore();

  // 렌더링할 변수들: 스토어에서 가져와서 변수에 할당 ======================
  const petId = petInfoDetail.id;
  const img = petInfoDetail.imageUrl; // URL string
  const interested = petInfoDetail.isLiked; // boolean
  const species = formatString(petInfoDetail.species); // string
  const breed = formatString(petInfoDetail.breed); // string
  const age = petInfoDetail.age; // int
  const gender = formatString(petInfoDetail.gender); // string
  const size = formatString(petInfoDetail.size); // string e.g. "MINIATURE"
  const neutralized = petInfoDetail.isNeutralized; // boolean
  const colors = petInfoDetail.colors; // string list (요소들의 포맷팅은 밑에서 렌더링 시)
  const shelter = petInfoDetail.shelter; // object { branchName, contact, latitude, longitude }
  // 임시 ------------------------------------------------------------
  // const petId = 1;
  // const img = sampleImg;
  // const interested = false;
  // const breed = "MALTESE";
  // const age = "1";
  // const gender = "FEMALE";
  // const size = "MINIATURE";
  // const neutralized = true;
  // const colors = ["WHITE", "BLACK", "BROWN"];
  // const shelter = {
  //   branchName: "Huel-Ratke",
  //   contact: "433-830-2032",
  //   id: 13,
  //   location: null,
  //   latitude: 13.9142931,
  //   longitude: -87.921223,
  // };
  const diseasesList = [
    { key: "Malnutrition", value: true },
    { key: "Eye trouble", value: false },
  ];
  const checkupList = [
    { key: "General checkup", value: true },
    { key: "DA2PP", value: true },
    { key: "Anti-rabies vaccine", value: true },
    { key: "Kennel cough vaccine", value: true },
  ];
  const comment =
    "She is rescued on a cold winter day, and was very dwarfed at first because she didn't eat well. However, she is adaptable enough to quickly become a normal size while eating well here. She is lively and obedient, and she runs around briskly and makes everyone happy.";

  // 이미지 비율 설정하기 ==============================================
  let newWidth, newHeight;
  const image = new Image();
  image.src = sampleImg;
  image.onload = function () {
    const originalWidth = image.width;
    const originalHeight = image.height;

    // const desiredRatio = 4 / 5; // 원하는 가로:세로 비율
    // newWidth = originalWidth;
    // newHeight = originalWidth / desiredRatio;

    // 높이를 자동으로 조정하여 비율 유지
    const desiredHeight = originalWidth * 1.25; // 4:5 비율에 따라 높이 계산
    image.style.height = `${desiredHeight}px`; // 높이 설정
  };

  // 보호소 위치 보기 =================================================
  const handleViewShelterLocation = () => {
    navigate(`/pet/${petId}/location`);
  };

  return (
    <ContainerIncludingImg flexDirection="column">
      {/* 이미지 */}
      <Img src={img || null} alt="picture" size="Big" width={newWidth} height={newHeight} />

      <InnerContainerIncludingImg gap="24px">
        {/* 기본 정보 */}
        <ContainerBasicPetInfo>
          {/* PETID & interested */}
          <ContainerNameAndIcon>
            <Text fontSize="20px" fontWeight="700">
              PETID-{petId}
            </Text>
            <Icon src={interested ? "IconHeartSelected" : "IconHeartOff"} />
          </ContainerNameAndIcon>

          {/* breed, age & gender, size, & colors */}
          <ContainerBasicPetInfo_1>
            {/* breed */}
            <Text fontSize={FONT_SIZE}>{breed}</Text>
            {/* age & gender */}
            <Text fontSize={FONT_SIZE}>{`${age} year(s) old, ${gender}`}</Text>
            {/* size */}
            <Text fontSize={FONT_SIZE}>{`${size}`}</Text>
            {/* colors */}
            <Text fontSize={FONT_SIZE}>
              {colors.map((color, index) => (
                <span key={index}>
                  {formatString(color)}
                  {index < colors.length - 1 ? ", " : ""}
                  {/* 마지막 요소 이후에는 쉼표를 출력하지 않음  */}
                </span>
              ))}
            </Text>
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
            {shelter.branchName}
          </Text>
          <ButtonMiniCTA item="View location" onClick={handleViewShelterLocation} />
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
