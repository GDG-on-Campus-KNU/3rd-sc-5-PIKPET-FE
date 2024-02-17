import { useEffect } from "react";
import { useCurrentPageStore } from "@store";

import Header from "@components/organisms/Header";
import SearchFilterDropdown from "@components/organisms/SearchFilterDropdown";
import PetInfoList from "@components/organisms/PetInfoList";
import Paginator from "@components/organisms/Paginator";

import styled from "styled-components";
import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/layout";

const SearchResultTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();

  // 최초 마운트시에(만) setCurrentPage
  useEffect(() => {
    setCurrentPage("/interests");
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장 (앱 리렌더링 시에도 값 보존 위해서)
  }, []);

  const NUM_OF_INTERESTED_PETS = 10;

  return (
    <Layout backgroundColor="white">
      <Header type="Widget" title="내 관심 동물" />

      <Main>
        <Contents>
          <div>
            <SearchFilterDropdown />
            <Text fontSize="12px">
              전체 <b>{NUM_OF_INTERESTED_PETS}</b>건
            </Text>
          </div>
          <PetInfoList />
          <Paginator />
        </Contents>
      </Main>
    </Layout>
  );
};

export default SearchResultTemplate;
