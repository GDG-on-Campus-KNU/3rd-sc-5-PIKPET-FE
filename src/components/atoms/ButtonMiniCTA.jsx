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
  border: none;
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
`;

export default ButtonMiniCTA;
