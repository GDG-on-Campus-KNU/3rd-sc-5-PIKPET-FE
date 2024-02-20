import { useEffect } from "react";
import { useCurrentPageStore } from "@store";

import SearchBar from "@components/organisms/SearchBar";
// import SearchFilterDropdown from "@components/organisms/SearchFilterDropdown";
import PetInfoList from "@components/organisms/PetInfoList";
import Paginator from "@components/organisms/Paginator";
import NavBar from "@components/organisms/NavBar";

// import styled from "styled-components";
import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/layout";

const SearchResultTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();

  // 최초 마운트시에(만) setCurrentPage
  useEffect(() => {
    setCurrentPage("/search/result");
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장 (앱 리렌더링 시에도 값 보존 위해서)
  }, []);

  const NUM_OF_PETS = 100;

  return (
    <Layout backgroundColor="white">
      <SearchBar />

      <Main>
        <Contents>
          <div>
            {/* <SearchFilterDropdown /> */}
            <Text fontSize="12px">
              검색 결과 <b>{NUM_OF_PETS}</b>건
            </Text>
          </div>
          <PetInfoList />
          <Paginator />
        </Contents>
        <NavBar />
      </Main>
    </Layout>
  );
};

export default SearchResultTemplate;
