import Icon from "@components/atoms/Icon";
import styled from "styled-components";
import Text from "@styles/Text";

const NavTab = ({ type, selected }) => {
  return (
    <>
      {type === "Home" && (
        <StyledNavTab selected={selected} href="/">
          <Icon src={selected ? "IconHomeSelected" : "IconHomeMono"} />
          <Text
            color={(props) =>
              selected ? props.theme.colors.primary : props.theme.colors.gray
            }
            fontSize="12px"
          >
            홈
          </Text>
        </StyledNavTab>
      )}
      {type === "Search" && (
        <StyledNavTab selected={selected} href="/search">
          <Icon src={selected ? "IconSearchSelected" : "IconSearchMono"} />
          <Text
            color={(props) =>
              selected ? props.theme.colors.primary : props.theme.colors.gray
            }
            fontSize="12px"
          >
            검색
          </Text>
        </StyledNavTab>
      )}
      {type === "User" && (
        <StyledNavTab selected={selected} href="/mypage">
          <Icon src={selected ? "IconUserSelected" : "IconUserMono"} />
          <Text
            color={(props) =>
              selected ? props.theme.colors.primary : props.theme.colors.gray
            }
            fontSize="12px"
          >
            마이페이지
          </Text>
        </StyledNavTab>
      )}
    </>
  );
};

const StyledNavTab = styled.a`
  width: calc(100% / 3);
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 4px;
  border-top: ${(props) =>
    props.selected ? `2px solid ${props.theme.colors.primary}` : "none"};
  box-sizing: border-box;
  background-color: white;
  cursor: pointer;
`;

export default NavTab;
