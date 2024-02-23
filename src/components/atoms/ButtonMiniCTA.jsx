import styled from "styled-components";
import { StyledButtonTag } from "./ButtonTag";

const ButtonMiniCTA = ({ item, paddingX, paddingY, fontSize, ...rest }) => {
  return (
    <StyledMiniCTA paddingX={paddingX} paddingY={paddingY} fontSize={fontSize} {...rest}>
      {item}
    </StyledMiniCTA>
  );
};

const StyledMiniCTA = styled(StyledButtonTag)`
  padding: ${(props) => props.paddingY || "4px"} ${(props) => props.paddingX || "12px"};
  border: none;
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.fontSize || "12px"};
`;

export default ButtonMiniCTA;
