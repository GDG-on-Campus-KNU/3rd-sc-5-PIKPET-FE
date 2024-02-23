import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.paddingY || "12px"} ${(props) => props.paddingX || "0"};
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContainerIncludingImg = styled(Container)`
  padding: 0;
  gap: 0;
  flex-direction: ${(props) => props.flexDirection || "row"};
  box-sizing: border-box;
  cursor: pointer;
`;

const InnerContainerIncludingImg = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  box-sizing: border-box;
  gap: ${(props) => props.gap};
`;

const ContainerNameAndIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Container;
export { ContainerIncludingImg, InnerContainerIncludingImg, ContainerNameAndIcon };
