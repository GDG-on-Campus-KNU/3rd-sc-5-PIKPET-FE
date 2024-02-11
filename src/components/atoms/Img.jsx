import styled from "styled-components";

// src 필수
// size: Small / Middle / Big
export const Img = ({
  src,
  size,
  width,
  height,
  border,
  borderRadius,
  margin,
  boxShadow,
  backgroundColor,
}) => {
  if (src === undefined) throw new Error("src prop is necessary.");

  if (size === undefined)
    return (
      <StyledImg
        src={src}
        width={width}
        height={height}
        border={border}
        borderRadius={borderRadius || "0"}
        margin={margin}
        boxShadow={boxShadow}
        backgroundColor={backgroundColor}
      />
    );
  else if (size === "Small")
    return (
      <StyledImg
        src={src}
        width="100px"
        height="125px"
        border={border}
        borderRadius={borderRadius}
        margin={margin}
        boxShadow={boxShadow}
        backgroundColor={backgroundColor}
      />
    );
  else if (size === "Middle")
    return (
      <StyledImg
        src={src}
        width="112px"
        height="140px"
        border={border}
        borderRadius={borderRadius}
        margin={margin}
        boxShadow={boxShadow}
        backgroundColor={backgroundColor}
      />
    );
  else if (size === "Big")
    return (
      <StyledImg
        src={src}
        width="328px"
        height="410px"
        border={border}
        borderRadius={borderRadius}
        margin={margin}
        boxShadow={boxShadow}
        backgroundColor={backgroundColor}
      />
    );
  else throw new Error("Undefined size of Img component.");
};

const StyledImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "10px"};
  margin: ${(props) => props.margin || "0"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  background-color: ${(props) =>
    props.backgroundColor || `${(props) => props.theme.colors.extraLightGray}`};
`;

export const ImgGroup = ({ children }) => {
  return <StyledImgGroup>{children}</StyledImgGroup>;
};

const StyledImgGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  overflow-x: scroll;
`;
