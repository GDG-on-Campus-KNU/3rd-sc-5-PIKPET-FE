import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";
import NavBar from "@components/organisms/NavBar";
import styled from "styled-components";

import ButtonCTA from "@components/atoms/ButtonCTA";
import ButtonTag from "@components/atoms/ButtonTag";
import CTAContainer from "@components/molecules/CTAContainer";
import Input from "@components/atoms/Input";
import Container from "@components/molecules/Container";
import { Img, ImgGroup } from "@styles/Img";
import samplePicture from "@assets/sample-picture.png";
import poster from "@assets/poster.png";
import WidgetArea from "../organisms/WidgetArea";

const HomeTemplate = () => {
  return (
    <ResponsiveLayout>
      <Header type="Default" />
      <ContentLayout>
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
        </WidgetArea>
        <Img src={poster} width="100%" />
        <Footer />
        <NavBar />
      </ContentLayout>
    </ResponsiveLayout>
  );
};

const ResponsiveLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 768px) {
    width: 360px;

    // 중앙 정렬
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContentLayout = styled.div`
  display: flex;
  padding-bottom: 12px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  // padding-left: 16px;
  // padding-right: 16px;
`;

export default HomeTemplate;
