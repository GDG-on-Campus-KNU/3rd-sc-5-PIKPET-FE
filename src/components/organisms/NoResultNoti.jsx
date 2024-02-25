import DrawingPets from "@assets/drawing-pets.png";

import styled from "styled-components";
import Text from "@styles/Text";

const NoResultNoti = ({ content }) => {
  return (
    <StyledNoResultNoti>
      <img src={DrawingPets} alt="no result" style={{ width: "220px" }} />
      <Text fontSize="14px" textAlign="center">
        {content}
      </Text>
    </StyledNoResultNoti>
  );
};

const StyledNoResultNoti = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

export default NoResultNoti;
