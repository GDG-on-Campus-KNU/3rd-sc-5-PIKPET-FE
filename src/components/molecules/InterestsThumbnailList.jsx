import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useInterestsStore } from "@store";

import Icon from "@components/atoms/Icon";
import Img, { ImgGroup } from "@components/atoms/Img";
import { StyledShelter } from "@components/molecules/PetInfo";
import { fetchInterests, changeInterested } from "@/utils/interestsService";

import styled from "styled-components";
import Text from "@styles/Text";

const InterestsThumbnailList = () => {
  const navigate = useNavigate();
  const { interestsList, setInterestsList, numberOfInterests, setNumberOfInterests } =
    useInterestsStore();

  // 관심 동물 리스트 조회 ===========================================================
  useEffect(() => {
    fetchInterests(setNumberOfInterests, setInterestsList);
  }, []);

  // 리턴 값 설정 ==================================================================

  // 관심 동물이 없을 경우: interestsList가 null 또는 undefined ----------------------
  if (interestsList.length === 0) {
    return <span>loading...</span>; // 또는 로딩 표시 등을 반환할 수 있음
  }

  // 관심 동물(interestsList)이 있을 경우 -------------------------------------------
  const slicedInterestsList = interestsList.slice(0, 5);

  // 동물 상세 페이지로 이동 ------------------------------------------------------
  const handleViewPetInfoDetail = (id) => {
    navigate(`/pet/${id}`);
  };

  // 관심 on/off 변경 ==============================================================
  // const handleClickHeart = (event, id) => {
  //   event.stopPropagation(); // 상위 요소로 이벤트 전파 중단

  //   changeInterested(id)
  //     .then((interested) => {
  //       setIsInterested(interested);
  //       console.log("set"); // test
  //     })
  //     .catch((error) => {
  //       console.error(`An error occurred in fetching interested.`, error);
  //     });
  // };

  return (
    <ImgGroup>
      {slicedInterestsList.map((item, index) => (
        <InterestsThumbnail key={index} onClick={() => handleViewPetInfoDetail(item.id)}>
          <div style={{ position: "relative" }}>
            <Img src={item.imageUrl} size="Small" />
            <IconWrapper>
              <Icon
                src={item.isLiked ? "IconHeartSelected" : "IconHeartOff"}
                // src="IconHeartSelected" // 임시
                // onClick={(event) => handleClickHeart(event, item.id)}
              />
            </IconWrapper>
          </div>
          <Text fontSize="14px" fontWeight="500">
            PETID-{item.id}
          </Text>
          <StyledShelter>
            <Icon src="IconPinLocation" width="14px" height="14px" />
            <Text fontSize="12px" color={(props) => props.theme.colors.gray}>
              {item.shelter.branchName}
            </Text>
          </StyledShelter>
        </InterestsThumbnail>
      ))}
    </ImgGroup>
  );
};

const InterestsThumbnail = styled.div`
  width: 100px;
  // display: flex;
  // flex-direction: column;
  // gap: 4px;
`;

// 아이콘을 감싸는 부모 요소: 모달창은 absolute, X 아이콘은 relative여야 하기 때문에 만듦
// Icon 모듈에 집어넣어 모듈화하기...
const IconWrapper = styled.div`
  position: absolute;
  // top: 10px;
  right: 8px;
  bottom: 8px;
`;

export default InterestsThumbnailList;
