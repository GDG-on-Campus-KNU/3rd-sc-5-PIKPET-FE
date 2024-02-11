import styled from "styled-components";

import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";
import NavBar from "@components/organisms/NavBar";
import ButtonCTA from "@components/atoms/ButtonCTA";
import ButtonTag from "@components/atoms/ButtonTag";
import CTAContainer from "@components/molecules/CTAContainer";
import Input from "@components/atoms/Input";
import Container from "@components/molecules/Container";
import WidgetArea from "@components/organisms/WidgetArea";
import { Img, ImgGroup } from "@components/atoms/Img";
import samplePicture from "@assets/sample-picture.png";
import poster from "@assets/poster.png";

const HomeTemplate = () => {
  return (
    <ResponsiveLayout>
      <Header type="Default" />

      <ContentLayout paddingX>
        {/* <ButtonCTA type="SecondaryDisabled" title="입력하기" /> */}
        {/* <ButtonTag type="Default" title="#포메라니안"></ButtonTag> */}
        {/* <CTAContainer type="2ButtonUneven" title1="입력하기" title2="신청하기" /> */}
        {/* <Input placeholder="이름" /> */}
        <WidgetArea>
          <Container title="내 검색 히스토리">
            <ImgGroup>
              <Img src={samplePicture} size="Small" />
              <Img src={samplePicture} size="Small" />
              <Img src={samplePicture} size="Small" />
              <Img src={samplePicture} size="Small" />
              <Img src={samplePicture} size="Small" />
            </ImgGroup>
          </Container>
          <Container title="내 관심 동물">
            <ImgGroup>
              <Img src={samplePicture} size="Small" />
              <Img src={samplePicture} size="Small" />
              <Img src={samplePicture} size="Small" />
              <Img src={samplePicture} size="Small" />
              <Img src={samplePicture} size="Small" />
            </ImgGroup>
          </Container>
        </WidgetArea>
        <Img src={poster} width="100%" />
        <Footer />
      </ContentLayout>

      <NavBar />
    </ResponsiveLayout>
  );
};

const ResponsiveLayout = styled.div`
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

const ContentLayout = styled.div`
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

export default HomeTemplate;
