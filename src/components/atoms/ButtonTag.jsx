import { useState } from "react";
import styled from "styled-components";

// type 필수
const ButtonTag = ({ type, item, paddingX, paddingY, fontSize, ...rest }) => {
  const [selected, setSelected] = useState(false);

  const handleClickButtonTag = () => {
    setSelected(!selected);
  };

  if (type === undefined) {
    throw new Error("type prop is necessary.");
  } else if (type === "Default") {
    return (
      <StyledButtonTag
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        selected={selected}
        onClick={handleClickButtonTag}
        {...rest}
      >
        {item}
      </StyledButtonTag>
    );
  } else if (type === "MiniCTA") {
    return (
      <StyledMiniCTA paddingX={paddingX} paddingY={paddingY} fontSize={fontSize} {...rest}>
        {item}
      </StyledMiniCTA>
    );
  } else throw new Error("Undefined type of ButtonTag");
};

const StyledButtonTag = styled.button`
  padding: ${(props) => props.paddingY || "4px"} ${(props) => props.paddingX || "12px"};
  box-sizing: border-box;
  border-radius: 50px;
  background-color: white;
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: 400;
  // font-family: ${(props) => props.theme.fontBody};

  border: 1px solid
    ${(props) => (props.selected ? props.theme.colors.primary : props.theme.colors.lightGray)};
  color: ${(props) => (props.selected ? props.theme.colors.primary : "black")};
`;

const StyledMiniCTA = styled(StyledButtonTag)`
  border: none;
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ButtonTagGroup = ({ children }) => {
  return <StyledButtonTagGroup>{children}</StyledButtonTagGroup>;
};

const StyledButtonTagGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export default ButtonTag;
