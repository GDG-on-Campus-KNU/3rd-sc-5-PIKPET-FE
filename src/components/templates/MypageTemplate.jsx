import { useEffect } from "react";
import { useCurrentPageStore, useLoggedinStore } from "@store";

import Header from "@components/organisms/Header";
import NavBar from "@components/organisms/NavBar";

import Layout, { Main, Contents } from "@styles/layout";
import Text from "@styles/Text";

const MypageTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage("/mypage");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  return (
    <Layout backgroundColor="white">
      <Header type="Mypage" />
      <Main>
        <Contents></Contents>
        <NavBar />
      </Main>
    </Layout>
  );
};

export default MypageTemplate;
