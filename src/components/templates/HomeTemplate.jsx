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
import poster from "@assets/poster-ad.png";
import samplePicture1 from "@assets/sample-pictures/sample-picture-1.png";
import samplePicture2 from "@assets/sample-pictures/sample-picture-3.jpeg";
import samplePicture3 from "@assets/sample-pictures/sample-picture-5.jpeg";
import samplePicture4 from "@assets/sample-pictures/sample-picture-6.jpeg";
import samplePicture5 from "@assets/sample-pictures/sample-picture-7.jpeg";

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
        <Contents noPadding>
          <WidgetArea>
            <Container>
              <ContainerTitle title="My search history" />
              <ImgGroup>
                <Img src={samplePicture1} size="Small" />
                <Img src={samplePicture2} size="Small" />
                <Img src={samplePicture3} size="Small" />
                <Img src={samplePicture4} size="Small" />
                <Img src={samplePicture5} size="Small" />
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
