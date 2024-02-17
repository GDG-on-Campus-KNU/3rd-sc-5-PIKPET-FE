import PetInfo from "@components/molecules/PetInfo";

import styled from "styled-components";

const PetInfoList = () => {
  return (
    <StyledPetInfoList>
      {/* data.map((pet, index)=>(<PetInfo petId={} name={pet.name} ... />)) */}
      <PetInfo
        petId={0}
        name="솜솜이"
        interested={false}
        breed="말티즈"
        age="8개월"
        gender="여"
        shelter="OO보호소"
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