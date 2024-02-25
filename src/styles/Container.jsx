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
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  box-sizing: border-box;
  cursor: pointer;
`;

const InnerContainerIncludingImg1 = styled.div`
  width: calc(100% - 112px); // 사진 너비만큼 뺌
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  box-sizing: border-box;
  gap: ${(props) => props.gap};
  // flex-grow: 1; // 이건 왠지 안 되더라...
`;

const InnerContainerIncludingImg2 = styled.div`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
  box-sizing: border-box;
  gap: ${(props) => props.gap};
  // flex-grow: 1; // 이건 왠지 안 되더라...
`;

const ContainerNameAndIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Container;
export {
  ContainerIncludingImg,
  InnerContainerIncludingImg1,
  InnerContainerIncludingImg2,
  ContainerNameAndIcon,
};
