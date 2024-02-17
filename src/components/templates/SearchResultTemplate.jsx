import { useEffect } from "react";
import { useCurrentPageStore } from "@store";

import SearchBar from "@components/organisms/SearchBar";
import NavBar from "@components/organisms/NavBar";

import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/layout";

const SearchResultTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();

  // 최초 마운트시에(만) setCurrentPage
  useEffect(() => {
    setCurrentPage("/search/result");
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장 (앱 리렌더링 시에도 값 보존 위해서)
  }, []);

  return (
    <Layout backgroundColor="white">
      <SearchBar />

      <Main>
        <Contents noPadding></Contents>

        <NavBar />
      </Main>
    </Layout>
  );
};

export default SearchResultTemplate;
