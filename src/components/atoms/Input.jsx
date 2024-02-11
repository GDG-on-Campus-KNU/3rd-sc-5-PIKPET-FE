import styled from "styled-components";
import { COLORS } from "@assets/theme";

const Input = ({ placeholder, width, paddingX, paddingY, fontSize, ...rest }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize={fontSize}
      {...rest}
    ></StyledInput>
  );
};

const StyledInput = styled.input`
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.paddingY || "12px"} ${(props) => props.paddingX || "16px"};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize || "14px"};
  border-radius: 10px;
  border: 1px solid ${COLORS.lightGray};
  background-color: white;
  outline: none;

  &:focus {
    border-color: ${COLORS.primary};
  }
`;

export default Input;
