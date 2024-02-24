// PetInfoList에 props로 data를 넘겨서 재사용하고 싶었으나...
// 서버로부터 넘겨받은 데이터의 key 이름들이 달라서 그냥 새로 만듦

import { useNavigate } from "react-router";
import { useInterestsStore } from "@store";

import PetInfo from "@components/molecules/PetInfo";

import styled from "styled-components";

const InterestsList = () => {
  const navigate = useNavigate();
  const { interestsList } = useInterestsStore();

  const handleClickPetInfo = (petId) => {
    navigate(`/pet/${petId}`);
  };

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

  return (
    <StyledPetInfoList>
      {interestsList &&
        interestsList.reverse().map((pet, index) => (
          <PetInfo
            key={index}
            petId={pet.id}
            age={pet.age}
            breed={formatString(pet.breed)}
            gender={formatString(pet.gender)}
            img={pet.imageUrl || null} // 이미지가 없는 경우를 처리
            interested={pet.isLiked}
            shelterName={pet.shelter.branchName}
            onClick={() => handleClickPetInfo(pet.id)}
          />
        ))}
    </StyledPetInfoList>
  );
};

const StyledPetInfoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default InterestsList;
