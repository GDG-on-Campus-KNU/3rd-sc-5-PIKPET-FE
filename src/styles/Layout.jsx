import styled from "styled-components";

const Layout = ({ backgroundColor, children }) => {
  return <StyledLayout backgroundColor={backgroundColor}>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;

  background-color: ${(props) => props.backgroundColor};

  position: fixed;
  top: 0;
  // 중앙 정렬
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    width: 480px;
  }
`;

export const Main = styled.div`
  height: calc(100vh - 54px); // - Header
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Contents = styled.div`
  width: 100%;
  //   height: calc(100vh - 54px - 72px); // - Header - NavBar
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || "flex-start"};
  padding-bottom: 12px;
  padding-left: ${(props) => (props.noPadding ? 0 : "16px")};
  padding-right: ${(props) => (props.noPadding ? 0 : "16px")};
  gap: ${(props) => props.gap || "12px"};
`;
