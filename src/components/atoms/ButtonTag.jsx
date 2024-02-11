import styled from "styled-components";

// type 필수

const ButtonTag = ({ type, title, paddingX, paddingY, fontSize, ...rest }) => {
  if (type === undefined) {
    throw new Error("type prop is necessary.");
  } else if (type === "Default") {
    return (
      <StyledDefault paddingX={paddingX} paddingY={paddingY} fontSize={fontSize} {...rest}>
        {title}
      </StyledDefault>
    );
  } else if (type === "Selected") {
    return (
      <StyledSelected paddingX={paddingX} paddingY={paddingY} fontSize={fontSize} {...rest}>
        {title}
      </StyledSelected>
    );
  } else if (type === "MiniCTA") {
    return (
      <StyledMiniCTA paddingX={paddingX} paddingY={paddingY} fontSize={fontSize} {...rest}>
        {title}
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
`;

const StyledDefault = styled(StyledButtonTag)`
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  color: black;
`;

const StyledSelected = styled(StyledDefault)`
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
`;

const StyledMiniCTA = styled(StyledButtonTag)`
  border: none;
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
`;
export default ButtonTag;
