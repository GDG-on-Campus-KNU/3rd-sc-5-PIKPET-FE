import styled from "styled-components";
import { COLORS } from "@assets/theme";

const Container = ({ width, height, paddingX, paddingY }) => {
  return <StyledContainer></StyledContainer>;
};

const StyledContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  padding: ${(props) => props.paddingY || "12px"} ${(props) => props.paddingX || "16px"};
  box-sizing: border-box;
  border: 1px solid ${COLORS.lightGray};
  border-radius: 10px;
  background-color: white;
`;

export default Container;
