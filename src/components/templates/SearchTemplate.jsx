import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCurrentPageStore, useKeywordsStore } from "@store";
import axios from "axios";

import { BASE_URL } from "@utils";
import SearchBar from "@components/organisms/SearchBar";
import SearchFilter from "@components/organisms/SearchFilter";
import CTAContainer from "@components/molecules/CTAContainer";

import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/layout";

const SearchTemplate = () => {
  const navigate = useNavigate;
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { keywordsList, setKeywordsList } = useKeywordsStore();

  // 최초 마운트시에(만) setCurrentPage
  useEffect(() => {
    setCurrentPage("/search");
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장 (앱 리렌더링 시에도 값 보존 위해서)
  }, []);

  // 키워드 보내기 (axios 통신)
  // const handleClickSearch = () => {
  //   let paramsToSend = {
  //     keywordsList: keywordsList,
  //     userLocation: userLocation,
  //   };

  //   axios
  //     .get(`${BASE_URL}/search`, paramsToSend, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //     .then((response) => {
  //       // console.log(`Your message has been sent successfully.`);
  //       // setIsSent(true);
  //       // response.data 배열에 담기 (상태관리로)
  //       // {petId, 이름, 사진, 나이, 성별, 종, 관심 여부, 보호소 이름}
  //       navigate("/search/result");
  //     })
  //     .catch((error) => {
  //       console.error(`An error occurred while searching.`, error);
  //     });
  // };

  return (
    <Layout backgroundColor="white">
      <SearchBar />

      <Main padding0>
        <Contents>
          <SearchFilter />
        </Contents>
        <CTAContainer
          type="SearchFilter"
          // onClick={handleClickSearch}
        />
      </Main>
    </Layout>
  );
};

export default SearchTemplate;
