import IconHomeMono from "@assets/icons/icon-home-mono.svg";
import IconHomeSelected from "@assets/icons/icon-home-selected.svg";
import IconSearchMono from "@assets/icons/icon-search-mono.svg";
import IconSearchSelected from "@assets/icons/icon-search-selected.svg";
import IconUserMono from "@assets/icons/icon-user-mono.svg";
import IconUserSelected from "@assets/icons/icon-user-selected.svg";
import styled from "styled-components";
import { Text } from "@styles/text";
import { COLORS } from "@assets/theme";

const NavButton = ({ type, selected }) => {
  return (
    <>
      {type === "home" && (
        <StyledNavButton selected={selected}>
          {selected ? (
            <img
              src={IconHomeSelected}
              alt="IconHomeSelected"
              style={{ width: "24px", height: "24px" }}
            />
          ) : (
            <img
              src={IconHomeMono}
              alt="IconHomeMono"
              style={{ width: "24px", height: "24px" }}
            />
          )}
          <Text color={selected ? COLORS.primary : COLORS.gray} fontSize="12px">
            홈
          </Text>
        </StyledNavButton>
      )}
      {type === "search" && (
        <StyledNavButton selected={selected}>
          {selected ? (
            <img
              src={IconSearchSelected}
              alt="IconSearchSelected"
              style={{ width: "24px", height: "24px" }}
            />
          ) : (
            <img
              src={IconSearchMono}
              alt="IconSearchMono"
              style={{ width: "24px", height: "24px" }}
            />
          )}
          <Text color={selected ? COLORS.primary : COLORS.gray} fontSize="12px">
            검색
          </Text>
        </StyledNavButton>
      )}
      {type === "user" && (
        <StyledNavButton selected={selected}>
          {selected ? (
            <img
              src={IconUserSelected}
              alt="IconUserSelected"
              style={{ width: "24px", height: "24px" }}
            />
          ) : (
            <img
              src={IconUserMono}
              alt="IconUserMono"
              style={{ width: "24px", height: "24px" }}
            />
          )}
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
`;

export default NavButton;
