import styled from "styled-components";

// type: 버튼 모양 (필수), title: 글자, ...
const ButtonCTA = ({ type, title, width, paddingX, paddingY, fontSize, ...rest }) => {
  if (type === undefined) {
    throw new Error("type prop is necessary.");
  } else if (type === "Primary") {
    return (
      <StyledPrimary
        width={width}
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        {...rest}
      >
        {title}
      </StyledPrimary>
    );
  } else if (type === "PrimaryDisabled") {
    return (
      <StyledPrimaryDisabled
        width={width}
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        {...rest}
      >
        {title}
      </StyledPrimaryDisabled>
    );
  } else if (type === "Secondary") {
    return (
      <StyledSecondary
        width={width}
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        {...rest}
      >
        {title}
      </StyledSecondary>
    );
  } else if (type === "SecondaryDisabled") {
    return (
      <StyledSecondaryDisabled
        width={width}
        paddingX={paddingX}
        paddingY={paddingY}
        fontSize={fontSize}
        {...rest}
      >
        {title}
      </StyledSecondaryDisabled>
    );
  } else throw new Error("Undefined type of ButtonCTA");
};

const StyledButtonCTA = styled.button`
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.paddingY || "12px"} ${(props) => props.paddingX || "16px"};
  box-sizing: border-box;
  border-radius: 10px;
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: 600;
  // font-family: ${(props) => props.theme.fontBody};

  &:hover {
    opacity: 0.8;
  }
`;

const StyledPrimary = styled(StyledButtonCTA)`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

const StyledPrimaryDisabled = styled(StyledPrimary)`
  opacity: 0.5;
  //   cursor: not-allowed;
  pointer-events: none;
`;

const StyledSecondary = styled(StyledButtonCTA)`
  border: 1px solid ${(props) => props.theme.colors.primary};
  background-color: white;
  color: ${(props) => props.theme.colors.primary};
`;

const StyledSecondaryDisabled = styled(StyledSecondary)`
  border-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.gray};

  opacity: 0.5;
  //   cursor: not-allowed;
  pointer-events: none;
`;

export default ButtonCTA;
