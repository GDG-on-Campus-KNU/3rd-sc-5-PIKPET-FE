import Icon from "@components/atoms/Icon";
import styled from "styled-components";
import Text from "@styles/Text";

const ContainerTitle = ({ title, color, fontSize, onClick }) => {
  return (
    <StyledContainerTitle color={color} fontSize={fontSize} onClick={onClick}>
      {title}
      <Icon src="IconArrowRight" />
    </StyledContainerTitle>
  );
};

const ContainerTitle2 = ({ title, color, fontSize, onClick }) => {
  return (
    <StyledContainerTitle color={color} fontSize={fontSize} onClick={onClick}>
      {title}
    </StyledContainerTitle>
  );
};

const StyledContainerTitle = styled.div`
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: 700;
`;

export default ContainerTitle;
export { ContainerTitle2 };
