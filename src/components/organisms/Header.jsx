import { useNavigate } from "react-router-dom";
import { Icon, IconGroup } from "@components/atoms/Icon";
import styled from "styled-components";
import { Text } from "@styles/Text";
import { COLORS } from "@assets/theme";

const Header = ({ type, title }) => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickSearch = () => {
    navigate("/search");
  };

  const handleClickHeart = () => {
    navigate("/interest");
  };

  if (type === "undefined") {
    throw new Error("type prop is necessary.");
  } else if (type === "default") {
    return (
      <StyledHeader backgroundColor="transparent">
        <Text color={COLORS.primary} fontSize="24px" fontWeight="700">
          PIKPET
        </Text>
      </StyledHeader>
    );
  } else if (type === "widget") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" />
        <Text fontWeight="700">{title}</Text>
        <div style={{ width: "24px", height: "24px" }}></div>
      </StyledHeader>
    );
  } else if (type === "PetInfoDetail") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" />
        <IconGroup
          srcs={["IconHomeMono", "IconSearchMono", "IconHeartMono"]}
          onClicks={[handleClickHome, handleClickSearch, handleClickHeart]}
        />
      </StyledHeader>
    );
  } else if (type === "Mypage") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" />
        <Icon src="IconHeartMono" />
      </StyledHeader>
    );
  } else if (type === "Login") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" />
        <Icon src="IconHomeMono" onClick={handleClickHome} />
      </StyledHeader>
    );
  } else if (type === "Application") {
    return (
      <StyledHeader>
        <Icon src="IconBackward" />
        <Text fontWeight="700">{title}</Text>
        <Icon src="IconSave" />
      </StyledHeader>
    );
  } else throw new Error("undefined type");
};

const StyledHeader = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  padding: 0 16px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "white"};
`;

export default Header;
