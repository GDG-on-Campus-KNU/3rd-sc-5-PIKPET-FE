import { useEffect } from "react";
import { useCurrentPageStore, useKeywordsStore } from "@store";

import SearchBar from "@components/organisms/SearchBar";
import SearchFilter from "@components/organisms/SearchFilter";
import CTAContainer from "@components/molecules/CTAContainer";

import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/layout";

const SearchTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { keywordsList, setKeywordsList } = useKeywordsStore();

  // 최초 마운트시에(만) setCurrentPage
  useEffect(() => {
    setCurrentPage("/search");
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장 (앱 리렌더링 시에도 값 보존 위해서)
  }, []);

  return (
    <Layout backgroundColor="white">
      <SearchBar />

      <Main padding0>
        <Contents>
          <SearchFilter />
        </Contents>
        <CTAContainer type="SearchFilter" />
      </Main>
    </Layout>
  );
};

export default SearchTemplate;
