import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  useCurrentPageStore,
  useLoggedinStore,
  useSearchKeywordsStore,
  useSearchTagsStore,
  useSearchImgStore,
  usePetInfoStore,
} from "@store";
import axios from "axios";
import useGeolocation from "react-hook-geolocation";

import SearchBar from "@components/organisms/SearchBar";
import SearchFilter from "@components/organisms/SearchFilter";
import CTAContainer from "@components/molecules/CTAContainer";

// import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/layout";

const SearchTemplate = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();
  const { keywordsList, setKeywordsList } = useSearchKeywordsStore();
  const {
    speciesTagsList,
    breedTagsList,
    minAge,
    maxAge,
    genderTagsList,
    sizeTagsList,
    colorTagsList,
    neutralized,
  } = useSearchTagsStore();
  const { searchImg } = useSearchImgStore();
  const { petInfoList, setPetInfoList } = usePetInfoStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage(`/search`);
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  // 위치 get ===================================================
  const { latitude, longitude, error } = useGeolocation();
  const currentLatitude = latitude;
  const currentLongitude = longitude;

  // 이건 왠지 모르겠지만 값 설정이 안 됨: null null 뜸
  // const [currentLatitude, setCurrentLatitude] = useState(null);
  // const [currentLongitude, setCurrentLongitude] = useState(null);

  // useEffect(() => {
  //   if (latitude && longitude) {
  //     setCurrentLatitude(latitude);
  //     setCurrentLongitude(longitude);
  //   }
  // }, []); // 초기 렌더링 시에만 위치 설정

  // console.log(currentLatitude, currentLongitude); // for test

  // 각 tags list로부터 쿼리 파라미터 생성하기 =======================
  // queryParams에 담은 후에 queryString으로 문자열화할 것임
  const queryParams = new URLSearchParams();
  const queryParamsLocation = new URLSearchParams();

  if (speciesTagsList.length !== 0) {
    const formattedSpeciesTagsList = speciesTagsList.map((item) =>
      item.toUpperCase().replace(/\s+/g, "_")
    ); // 배열의 아이템들을 포맷팅: 대문자화, 공백은 _로 대체
    queryParams.append("species", formattedSpeciesTagsList);
  }
  if (breedTagsList.length !== 0) {
    const formattedBreedTagsList = breedTagsList.map((item) =>
      item.toUpperCase().replace(/\s+/g, "_")
    );
    queryParams.append("breeds", formattedBreedTagsList);
  }
  if (minAge) queryParams.append("minAge", minAge); // 0이면 추가가 안 됨
  if (maxAge) queryParams.append("maxAge", maxAge);
  if (genderTagsList.length !== 0) {
    const formattedGenderTagsList = genderTagsList.map((item) =>
      item.toUpperCase().replace(/\s+/g, "_")
    );
    queryParams.append("gender", formattedGenderTagsList);
  }
  if (sizeTagsList.length !== 0) {
    const formattedSizeTagsList = sizeTagsList.map((item) =>
      item.toUpperCase().replace(/\s+/g, "_")
    );
    queryParams.append("animalSize", formattedSizeTagsList);
  }
  if (colorTagsList.length !== 0) {
    const formattedColorTagsList = colorTagsList.map((item) =>
      item.toUpperCase().replace(/\s+/g, "_")
    );
    queryParams.append("colors", formattedColorTagsList);
  }
  if (neutralized === true) queryParams.append("neutralized", neutralized);
  if (currentLatitude) queryParams.append("lat", currentLatitude);
  if (currentLongitude) queryParams.append("lon", currentLongitude);

  const queryString = queryParams.toString();
  console.log(`queryString: ${queryString}`); // test

  // const queryStringLocation = queryParamsLocation.toString();
  // console.log(`queryStringLocation: ${queryStringLocation}`); // test

  // 필터 검색 통신 ==================================================
  const handleClickSearch = () => {
    axios
      .get(`/api/api/animal?${queryString}${queryStringLocation}`)
      .then((response) => {
        const data = response.data;
        // console.log("data: ", data); // test
        const { animals, page } = data; // 키로 데이터 추출
        console.log("animals: ", animals, "page: ", page); // for test

        setPetInfoList(animals);

        // navigate(`/search?${queryString}`);
      })
      .catch((error) => {
        console.error(`An error occurred while searching.`, error);
      });
  };

  // 이미지 검색 통신 =================================================
  const handleSendImg = () => {
    // console.log("called"); // for test

    axios
      .post(`/api/api/animal/image?${queryString}`, searchImg, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log("data: ", data); // test
        const { animals, page } = data; // 키로 데이터 추출

        // pet 리스트에 저장
        setPetInfoList(animals);
        // console.log(petInfoList); // test

        navigate(`/result`);
      })
      .catch((error) => {
        console.error(`An error occurred while image searching.`, error);
      });
  };

  return (
    <Layout backgroundColor="white">
      <SearchBar onClick={handleSendImg} />

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
