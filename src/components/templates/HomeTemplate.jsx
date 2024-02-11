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

import styled from "styled-components";
import { ResponsiveLayout, ContentLayout } from "@styles/Layout";

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

export default HomeTemplate;
