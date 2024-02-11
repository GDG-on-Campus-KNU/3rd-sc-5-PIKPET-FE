import styled from "styled-components";

export const ResponsiveLayout = styled.div`
  width: 100vw;
  height: 100vh;
  // overflow-y: auto;

  position: fixed;
  top: 0;
  // 중앙 정렬
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    width: 480px;
  }
`;

export const ContentLayout = styled.div`
  height: calc(100vh - 54px - 72px - 12px); // - Header - NavBar - padding-bottom
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${(props) => (props.paddingX ? 0 : "16px")};
  padding-right: ${(props) => (props.paddingX ? 0 : "16px")};
  padding-bottom: 12px;
  gap: 12px;
`;
