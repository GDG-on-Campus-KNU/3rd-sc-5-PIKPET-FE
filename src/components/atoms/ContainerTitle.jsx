import Icon from "@components/atoms/Icon";
import styled from "styled-components";
import Text from "@styles/Text";

const ContainerTitle = ({ title, color, fontSize }) => {
  return (
    <StyledContainerTitle color={color} fontSize={fontSize}>
      {title}
      <Icon src="IconArrowRight" />
    </StyledContainerTitle>
  );
};

const StyledContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: 700;
`;

export default ContainerTitle;
