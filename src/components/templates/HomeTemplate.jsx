import { useEffect } from "react";
import { useCurrentPageStore, useLoggedinStore } from "@store";

import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";
import NavBar from "@components/organisms/NavBar";
import ContainerTitle from "@components/atoms/ContainerTitle";
import WidgetArea from "@components/organisms/WidgetArea";
import ButtonTag, { ButtonTagGroup } from "@components/atoms/ButtonTag";
import Img, { ImgGroup } from "@components/atoms/Img";
import InterestsThumbnailList from "@components/molecules/InterestsThumbnailList";
import samplePicture from "@assets/sample-picture.png";
import poster from "@assets/poster-ad.png";

import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/Layout";
import Container from "@styles/Container";

const HomeTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage("/");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장

    // 로그인 상태 확인: 로컬 스토리지에서 꺼내와 상태 값으로 재저장
    const localIsLoggedin = localStorage.getItem("localIsLoggedin") === "true";
    // console.log(localIsLoggedin); // test
    setIsLoggedin(localIsLoggedin);
    // console.log(isLoggedin); // test
  }, [currentPage]);

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
            <Container>
              <ContainerTitle title="My search history" />
              <ImgGroup>
                <Img src={samplePicture} size="Small" />
                <Img src={samplePicture} size="Small" />
                <Img src={samplePicture} size="Small" />
                <Img src={samplePicture} size="Small" />
                <Img src={samplePicture} size="Small" />
              </ImgGroup>
            </Container>
            <Container>
              <a href="/interests">
                <ContainerTitle title="My interests" />
              </a>
              <InterestsThumbnailList />
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
