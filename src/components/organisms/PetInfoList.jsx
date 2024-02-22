import { useNavigate } from "react-router";
import { usePetInfoStore } from "@store";

import PetInfo from "@components/molecules/PetInfo";
import sampleImg from "@assets/sample-picture-2.jpeg";

import styled from "styled-components";
const PetInfoList = () => {
  const navigate = useNavigate();
  const { petInfoList } = usePetInfoStore();

  const handleClickPetInfo = (petId) => {
    navigate(`/pet/${petId}`);
  };

  // 문자열 포맷팅 BEAGLE -> Beagle
  const capitalizeSecondLetter = (word) => {
    return word.charAt(0) + word.slice(1).toLowerCase();
  };

  return (
    <StyledPetInfoList>
      {petInfoList &&
        petInfoList.map((pet, index) => (
          <PetInfo
            key={index}
            petId={pet.animalId}
            age={pet.age}
            breed={capitalizeSecondLetter(pet.breed)}
            gender={capitalizeSecondLetter(pet.gender)}
            img={pet.imageUrl || null} // 이미지가 없는 경우를 처리
            interested={pet.isLiked}
            shelterName={pet.branchName}
            onClick={() => handleClickPetInfo(pet.animalId)}
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

export default PetInfoList;
