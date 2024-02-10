import { Icon } from "@components/atoms/Icon";
import styled from "styled-components";
import { Text } from "@styles/text";
import { COLORS } from "@assets/theme";

const NavButton = ({ type, selected }) => {
  return (
    <>
      {type === "home" && (
        <StyledNavButton selected={selected}>
          <Icon src={selected ? "IconHomeSelected" : "IconHomeMono"} />
          <Text color={selected ? COLORS.primary : COLORS.gray} fontSize="12px">
            홈
          </Text>
        </StyledNavButton>
      )}
      {type === "search" && (
        <StyledNavButton selected={selected}>
          <Icon src={selected ? "IconSearchSelected" : "IconSearchMono"} />
          <Text color={selected ? COLORS.primary : COLORS.gray} fontSize="12px">
            검색
          </Text>
        </StyledNavButton>
      )}
      {type === "user" && (
        <StyledNavButton selected={selected}>
          <Icon src={selected ? "IconUserSelected" : "IconUserMono"} />
          <Text color={selected ? COLORS.primary : COLORS.gray} fontSize="12px">
            마이페이지
          </Text>
        </StyledNavButton>
      )}
    </>
  );
};

const StyledNavButton = styled.div`
  width: calc(100% / 3);
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 4px;
  border-top: ${(props) => (props.selected ? `2px solid ${COLORS.primary}` : "none")};
  box-sizing: border-box;
  cursor: pointer;
`;

export default NavButton;
