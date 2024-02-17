import { useEffect } from "react";
import { useCurrentPageStore } from "@store";
import axios from "axios";

import { BASE_URL } from "@utils";
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
  //         console.log(`The data has brought successfully.`);
  //         // response.data 배열에 담기 (상태관리로)
  //         // {petId, 이름, 사진, 나이, 성별, 종, 관심 여부, 보호소 이름}
  //       })
  //       .catch((error) => {
  //         console.error(`An error occurred while fetching the data.`, error);
  //       });
  //   }, []);

  return (
    <Layout backgroundColor="white">
      <Header type="Widget" title="내 관심 동물" />

      <Main>
        <Contents>
          <div>
            {/* <SearchFilterDropdown /> */}
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
