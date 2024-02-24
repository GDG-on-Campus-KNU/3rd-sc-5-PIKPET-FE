import { useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useInterestsStore } from "@store";

import Icon from "@components/atoms/Icon";
import Img, { ImgGroup } from "@components/atoms/Img";
import { StyledShelter } from "@components/molecules/PetInfo";

import styled from "styled-components";
import Text from "@styles/Text";

const InterestsThumbnailList = () => {
  const navigate = useNavigate();
  const { interestsList, setInterestsList, addInterest, numberOfInterests, setNumberOfInterests } =
    useInterestsStore();

  // 이 코드도 중복 코드라 어딘가에 모듈화해야 할듯...
  // 관심 동물 리스트 조회 ===========================================================
  useEffect(() => {
    axios
      .get(`api/userInfo/likeAnimal`)
      .then((response) => {
        const data = response.data;
        // console.log("data: ", data, "the number of entries: ", data.length); // for test
        // data = [{ id, userAccount, animal: { id, imageUrl, ... } }, { id, userAccount, animal: { id, imageUrl, ... } }, ...] // list

        // 필요한 데이터 추출하여 스토어에 저장 => 왜 데브툴즈에서는 뜨고 콘솔 로그 찍으면 안 뜨지?????????????
        setNumberOfInterests(data.length); // 관심 동물 건수 저장
        data.forEach((entry) => addInterest(entry.animal)); // 관심 동물 저장
        // console.log("numberofInterests: ", numberOfInterests, "interestsList: ", interestsList); // for test
      })
      .catch((error) => {
        console.error(`An error occurred while fetching the interests.`, error);
      });
  }, []);

  // 리턴 값 설정 ==================================================================

  // 관심 동물이 없을 경우: interestsList가 null 또는 undefined ----------------------
  if (interestsList.length === 0) {
    return <span>loading...</span>; // 또는 로딩 표시 등을 반환할 수 있음
  }

  // 관심 동물(interestsList)이 있을 경우 -------------------------------------------

  // 동물 상세 페이지로 이동 ------------------------------------------------------
  const handleViewPetInfoDetail = (id) => {
    navigate(`/pet/${id}`);
  };

  // 관심 on/off ----------------------------------------------------------------
  const handleSetInterested = (id) => {};

  return (
    <ImgGroup>
      {interestsList
        .reverse()
        .slice(0, 5)
        .map((item, index) => (
          <InterestsThumbnail key={index} onClick={() => handleViewPetInfoDetail(item.id)}>
            <div style={{ position: "relative" }}>
              <Img src={item.imageUrl} size="Small" />
              <IconWrapper>
                <Icon
                  // src={item.isLiked ? "IconHeartSelected" : "IconHeartOff"}
                  src="IconHeartSelected" // 임시
                  onClick={() => handleSetInterested(item.id)}
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
