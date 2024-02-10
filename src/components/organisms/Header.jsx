import IconBackward from "@assets/icons/icon-backward.svg";
import IconHomeMono from "@assets/icons/icon-home-mono.svg";
import IconSearchMono from "@assets/icons/icon-search-mono.svg";
import IconHeartMono from "@assets/icons/icon-heart-mono.svg";
import IconSave from "@assets/icons/icon-save.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Text } from "@styles/text";
import { COLORS } from "@assets/theme";

const Header = ({ type, title }) => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickSearch = () => {
    navigate("/search");
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
        <img src={IconBackward} alt="iconBackward" />
        <p>{title}</p>
        <div></div>
      </StyledHeader>
    );
  } else if (type === "PetInfoDetail") {
    return (
      <StyledHeader>
        <img src={IconBackward} alt="iconBackward" />
        <StyledIconGroup>
          <img src={IconHomeMono} alt="iconHomeMono" onClick={handleClickHome} />
          <img src={IconSearchMono} alt="iconSearchMono" onClick={handleClickSearch} />
          <img src={IconHeartMono} alt="iconHeartMono" />
        </StyledIconGroup>
      </StyledHeader>
    );
  } else if (type === "Mypage") {
    return (
      <StyledHeader>
        <img src={IconBackward} alt="iconBackward" />
        <img src={IconHeartMono} alt="iconHeartMono" />
      </StyledHeader>
    );
  } else if (type === "Login") {
    return (
      <StyledHeader>
        <img src={IconBackward} alt="iconBackward" />
        <img src={IconHomeMono} alt="iconHomeMono" onClick={handleClickHome} />
      </StyledHeader>
    );
  } else if (type === "Application") {
    return (
      <StyledHeader>
        <img src={IconBackward} alt="iconBackward" />
        <p>{title}</p>
        <img src={IconSave} alt="iconSave" />
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

const StyledIconGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export default Header;
