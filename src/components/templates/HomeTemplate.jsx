import { useEffect } from "react";
import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";
import NavBar from "@components/organisms/NavBar";
import Container from "@components/molecules/Container";
import WidgetArea from "@components/organisms/WidgetArea";
import ButtonTag, { ButtonTagGroup } from "@components/atoms/ButtonTag";
import Img, { ImgGroup } from "@components/atoms/Img";
import samplePicture from "@assets/sample-picture.png";
import poster from "@assets/poster.png";

import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/Layout";

const HomeTemplate = () => {
  // currentPage(로그인 후 돌아올 페이지)를 설정하는 코드
  // 최초 마운트시에(만) setCurrentPage를 디스패치
  // useEffect(() => {
  //   dispatch(setCurrentPage("/"));
  // }, [dispatch]);

  // // 로컬스토리지에 currentPage 값을 저장 (앱 리렌더링 시에도 값 보존 위해서)
  // useEffect(() => {
  //   localStorage.setItem("currentPage", JSON.stringify(currentPage));
  // }, [currentPage]);

  return (
    <Layout>
      <Header type="Default" />

      <Main>
        {/* <ButtonCTA type="SecondaryDisabled" title="입력하기" /> */}
        {/* <ButtonTag type="Default" title="#포메라니안"></ButtonTag> */}
        {/* <CTAContainer type="2ButtonUneven" title1="입력하기" title2="신청하기" /> */}
        {/* <Input placeholder="이름" /> */}
        <Contents noPadding>
          <WidgetArea>
            <Container title="내 검색 히스토리">
              <ButtonTagGroup>
                <ButtonTag item="흰색 푸들" />
                {/* 동적으로 검색 키워드 기록 넣기 */}
              </ButtonTagGroup>
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
        </Contents>

        <NavBar />
      </Main>
    </Layout>
  );
};

export default HomeTemplate;
