import { useEffect } from "react";
import { useCurrentPageStore } from "@store";

import Header from "@components/organisms/Header";
import NavBar from "@components/organisms/NavBar";

import Layout, { Main, Contents } from "@styles/layout";
import Text from "@styles/Text";

const MypageTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();

  // 최초 마운트시에(만) setCurrentPage
  useEffect(() => {
    setCurrentPage("/mypage");
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장 (앱 리렌더링 시에도 값 보존 위해서)
  }, []);

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
