import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCurrentPageStore, useLoggedinStore, useKeywordsStore, useTagsStore } from "@store";
import axios from "axios";

import { BASE_URL } from "@utils";
import SearchBar from "@components/organisms/SearchBar";
import SearchFilter from "@components/organisms/SearchFilter";
import CTAContainer from "@components/molecules/CTAContainer";

// import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/layout";

const SearchTemplate = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();
  const { keywordsList, setKeywordsList } = useKeywordsStore();
  const {
    speciesTagsList,
    breedTagsList,
    minAge,
    maxAge,
    genderTagsList,
    sizeTagsList,
    colorTagsList,
    neutralized,
  } = useTagsStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage(`/search?${queryString}`);
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  // 각 tags list로부터 쿼리 파라미터 생성하기 ----------
  const queryParams = new URLSearchParams();

  if (speciesTagsList.length !== 0) {
    const formattedSpeciesTagsList = speciesTagsList.map((species) => species.toLowerCase());
    queryParams.append("species", formattedSpeciesTagsList);
  }
  if (breedTagsList.length !== 0) {
    const formattedBreedTagsList = breedTagsList.map((species) => species.toLowerCase());
    queryParams.append("breed", formattedBreedTagsList);
  }
  if (minAge) queryParams.append("min_age", minAge); // 0이면 추가가 안 됨
  if (maxAge) queryParams.append("max_age", maxAge);
  if (genderTagsList.length !== 0) {
    const formattedGenderTagsList = genderTagsList.map((species) => species.toLowerCase());
    queryParams.append("gender", formattedGenderTagsList);
  }
  if (sizeTagsList.length !== 0) {
    const formattedSizeTagsList = sizeTagsList.map((size) => size.toLowerCase());
    queryParams.append("size", formattedSizeTagsList);
  }
  if (colorTagsList.length !== 0) {
    const formattedColorTagsList = colorTagsList.map((species) => species.toLowerCase());
    queryParams.append("color", formattedColorTagsList);
  }
  if (neutralized === true) queryParams.append("neutralized", neutralized);

  const queryString = queryParams.toString();
  // console.log(`queryString: ${queryString}`); // test

  // 키워드 보내기 (axios 통신)
  const handleClickSearch = () => {
    axios
      .get(`/api/search?${queryString}`)
      .then((response) => {
        // console.log(`The request has been sent successfully.`);
        // setIsSent(true);
        // response.data 배열에 담기 (상태관리로)
        // {petId, 이름, 사진, 나이, 성별, 종, 관심 여부, 보호소 이름}
        navigate("/search/result");
      })
      .catch((error) => {
        console.error(`An error occurred while searching.`, error);
      });
  };

  return (
    <Layout backgroundColor="white">
      <SearchBar />

      <Main padding0>
        <Contents>
          <SearchFilter />
        </Contents>
        <CTAContainer type="SearchFilter" onClick={handleClickSearch} />
      </Main>
    </Layout>
  );
};

export default SearchTemplate;
