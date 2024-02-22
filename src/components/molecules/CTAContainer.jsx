import ButtonCTA from "@components/atoms/ButtonCTA";
import Icon from "@components/atoms/Icon";
import styled from "styled-components";
import { useSearchTagsStore } from "@store";

// type: 필수
const CTAContainer = ({ type, title1, title2, onClick, onClick1, onClick2 }) => {
  const { clearAllTags } = useSearchTagsStore();

  // 각 리스트에 담긴 tag 값들 모두 삭제
  const handleClearAllTags = () => {
    clearAllTags();
  };

  // 검색(Go)
  const handleSearchButton = () => {
    onClick();
  };

  if (type === undefined) {
    throw new Error("type prop is necessary.");
  } else if (type === "1Button") {
    return (
      <StyledCTAContainer>
        <ButtonCTA type="Primary" title={title1} />
      </StyledCTAContainer>
    );
  } else if (type === "1ButtonLogout") {
    return (
      <StyledCTAContainer>
        <ButtonCTA type="Logout" title={title1} />
      </StyledCTAContainer>
    );
  } else if (type === "2ButtonEven") {
    return (
      <StyledCTAContainer>
        <ButtonCTA type="Secondary" title={title1} onClick={onClick1} />
        <ButtonCTA type="Primary" title={title2} onClick={onClick2} />
      </StyledCTAContainer>
    );
  } else if (type === "2ButtonUneven") {
    return (
      <StyledCTAContainer>
        <ButtonCTA type="Secondary" title={title1} width="calc(100% / 3)" />
        <ButtonCTA type="Primary" title={title2} width="calc(100% * 2/3)" />
      </StyledCTAContainer>
    );
  } else if (type === "SearchFilter") {
    return (
      <StyledCTAContainer>
        <Icon src="IconRefreshMono" onClick={handleClearAllTags} />
        <ButtonCTA type="Primary" title="Go" onClick={handleSearchButton} />
      </StyledCTAContainer>
    );
  } else throw new Error("Undefined type of CTAContainer");
};

const StyledCTAContainer = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  gap: 12px;
  background-color: white;

  position: sticky;
  bottom: 0;
`;

export default CTAContainer;
