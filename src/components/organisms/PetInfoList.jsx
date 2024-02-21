import { useNavigate } from "react-router";
import { usePetInfoStore } from "@store";

import PetInfo from "@components/molecules/PetInfo";
import sampleImg from "@assets/sample-picture-2.jpeg";

import styled from "styled-components";

const PetInfoList = ({ data }) => {
  const navigate = useNavigate();
  const { petInfoList } = usePetInfoStore();

  const petId = 0;

  const handleClickPetInfo = (petId) => {
    navigate(`/pet/${petId}`);
  };

  return (
    <StyledPetInfoList>
      {/* petInfoList.map((pet, index)=>(<PetInfo petId={} name={pet.name} ... />)) */}
      <PetInfo
        petId={petId}
        img={sampleImg}
        name="솜솜이"
        interested={false}
        breed="말티즈"
        age="8개월"
        gender="여"
        shelter="OO보호소"
        onClick={() => handleClickPetInfo(petId)}
      />
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
