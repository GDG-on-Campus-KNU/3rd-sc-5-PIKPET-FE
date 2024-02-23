import { useEffect } from "react";
import { useParams } from "react-router";
import { useCurrentPageStore, useLoggedinStore, usePetInfoStore } from "@store";

import SearchBar from "@components/organisms/SearchBar";
// import SearchFilterDropdown from "@components/organisms/SearchFilterDropdown";
import PetInfoList from "@components/organisms/PetInfoList";
import Paginator from "@components/organisms/Paginator";
import NavBar from "@components/organisms/NavBar";

// import styled from "styled-components";
import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/Layout";

const SearchResultTemplate = () => {
  const params = useParams();
  const queryString = params.queryString; // useParams를 통해 URL에서 가져온 queryString
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();
  const { petInfoList, numberOfElements } = usePetInfoStore();

  // console.log("called");

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage(`/result`);
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  const NUM_OF_PETS = numberOfElements;

  return (
    <Layout backgroundColor="white">
      <SearchBar />

      <Main>
        <Contents>
          <div>
            {/* <SearchFilterDropdown /> */}
            <Text fontSize="12px">
              <b>{NUM_OF_PETS}</b> in total
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

const loader = () => {};

export default SearchResultTemplate;
export { loader };
