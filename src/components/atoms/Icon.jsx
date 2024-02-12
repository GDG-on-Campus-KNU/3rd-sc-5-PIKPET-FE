import styled from "styled-components";
import IconArrowRightBlack20 from "@assets/icons/icon-arrow-right-black-20.svg";
import IconBackward from "@assets/icons/icon-backward.svg";
import IconHeartMono from "@assets/icons/icon-heart-mono.svg";
import IconHeartOff from "@assets/icons/icon-heart-off.svg";
import IconHomeMono from "@assets/icons/icon-home-mono.svg";
import IconHomeSelected from "@assets/icons/icon-home-selected.svg";
import IconPicture from "@assets/icons/icon-picture.svg";
import IconRefreshMono from "@assets/icons/icon-refresh-mono.svg";
import IconSave from "@assets/icons/icon-save.svg";
import IconSearchMono from "@assets/icons/icon-search-mono.svg";
import IconSearchSelected from "@assets/icons/icon-search-selected.svg";
import IconUserMono from "@assets/icons/icon-user-mono.svg";
import IconUserSelected from "@assets/icons/icon-user-selected.svg";
import IconXCircle from "@assets/icons/icon-x-circle.svg";

const Icon = ({ src, width, height, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  let icon;
  if (src === undefined) throw new Error("src prop is necessary.");
  else if (src === "IconArrowRight") icon = IconArrowRightBlack20;
  else if (src === "IconBackward") icon = IconBackward;
  else if (src === "IconHeartMono") icon = IconHeartMono;
  else if (src === "IconHeartOff") icon = IconHeartOff;
  else if (src === "IconHomeMono") icon = IconHomeMono;
  else if (src === "IconHomeSelected") icon = IconHomeSelected;
  else if (src === "IconPicture") icon = IconPicture;
  else if (src === "IconRefreshMono") icon = IconRefreshMono;
  else if (src === "IconSave") icon = IconSave;
  else if (src === "IconSearchMono") icon = IconSearchMono;
  else if (src === "IconSearchSelected") icon = IconSearchSelected;
  else if (src === "IconUserMono") icon = IconUserMono;
  else if (src === "IconUserSelected") icon = IconUserSelected;
  else if (src === "IconXCircle") icon = IconXCircle;
  else throw new Error("Undefined src of Icon");

  return (
    <StyledIcon src={icon} alt="icon" width={width} height={height} onClick={handleClick} />
  );
};

const StyledIcon = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  cursor: pointer;

  // &:hover {
  //   background-color: ${(props) => props.theme.colors.extraLightGray};
  //   border-radius: 5px;
  // }
`;

export const IconGroup = ({ srcs, onClicks }) => {
  return (
    <StyledIconGroup>
      {srcs.map((src, index) => (
        <Icon key={index} src={src} onClick={onClicks[index]} />
      ))}
    </StyledIconGroup>
  );
};

const StyledIconGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export default Icon;
