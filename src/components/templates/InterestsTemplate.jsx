import { useEffect } from "react";
import { useCurrentPageStore, useLoggedinStore, usePetInfoStore } from "@store";
import axios from "axios";

import Header from "@components/organisms/Header";
import SearchFilterDropdown from "@components/organisms/SearchFilterDropdown";
import PetInfoList from "@components/organisms/PetInfoList";
import Paginator from "@components/organisms/Paginator";

import styled from "styled-components";
import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/layout";

const SearchResultTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();
  const { petInfoList, setPetInfoList } = usePetInfoStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage("/interests");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  const NUM_OF_INTERESTED_PETS = 10;

  // 관심 동물 리스트 조회
  //   useEffect(() => {
  //     let paramsToSend = {};

  //     axios
  //       .get(`${BASE_URL}/userInfo/likeAnimal`, paramsToSend, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       })
  //       .then((response) => {
  //         console.log(`The interested pets data has been brought successfully.`);
  //         // 새로운 동물 정보 추가
  // response.data.map((pet, index)=>
  // usePetInfoStore.getState().addPetInfo({
  //     petId: 0,
  //     img: "",
  //     name: "멍멍이",
  //     interested: false,
  //     breed: "푸들",
  //     age: 3,
  //     gender: "female",
  //     shelter: "동물 보호소",
  //   });
  // )
  //       })
  //       .catch((error) => {
  //         console.error(`An error occurred while fetching the data.`, error);
  //       });
  //   }, []);

  return (
    <Layout backgroundColor="white">
      <Header type="Widget" title="My interests" />

      <Main>
        <Contents>
          <div>
            {/* <SearchFilterDropdown /> */}
            <Text fontSize="12px">
              <b>{NUM_OF_INTERESTED_PETS}</b> in total
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
