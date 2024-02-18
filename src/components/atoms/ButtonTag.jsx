import { useState } from "react";
import styled from "styled-components";

const ButtonTag = ({ item, isSelected, onClick, paddingX, paddingY, fontSize, ...rest }) => {
  const handleClickButtonTag = () => {
    onClick(item); // 전달된 onClick 함수 호출
  };

  return (
    <StyledButtonTag
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize={fontSize}
      isSelected={isSelected}
      onClick={handleClickButtonTag}
      {...rest}
    >
      {item}
    </StyledButtonTag>
  );
};

export const StyledButtonTag = styled.button`
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
