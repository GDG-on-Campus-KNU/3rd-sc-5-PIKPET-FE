import { useEffect } from "react";
import { useCurrentPageStore, useLoggedinStore, useInterestsStore } from "@store";
import axios from "axios";

import Header from "@components/organisms/Header";
import SearchFilterDropdown from "@components/organisms/SearchFilterDropdown";
import PetInfoList from "@components/organisms/PetInfoList";
import Paginator from "@components/organisms/Paginator";
import DrawingPets from "@assets/drawing-pets.png";

import styled from "styled-components";
import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/Layout";

const SearchResultTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();
  const {
    interestsList,
    setInterestsList,
    addInterest,
    numberOfInterests,
    setNumberOfInterests,
  } = useInterestsStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ===============================
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage("/interests");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  // 관심 동물 리스트 조회 ===========================================================
  useEffect(() => {
    axios
      .get(`api/userInfo/likeAnimal`)
      .then((response) => {
        const data = response.data;
        console.log("data: ", data); // for test
        // data = [{ id, animal, userAccount }, { id, animal, userAccount }, ...] // list

        // 필요한 데이터 추출하여 스토어에 저장
        setNumberOfInterests(data.length); // 관심 동물 건수
        data.map((entry) => addInterest(entry.animal)); // 관심 동물
        // console.log("interestsList: ", interestsList); // for test
      })
      .catch((error) => {
        console.error(`An error occurred while fetching the interests.`, error);
      });
  }, []);

  return (
    <Layout backgroundColor="white">
      <Header type="Widget" title="My interests" />

      <Main>
        <Contents>
          <div>
            {/* <SearchFilterDropdown /> */}
            <Text fontSize="12px">
              <b>{numberOfInterests}</b> in total
            </Text>
          </div>
          {numberOfInterests === 0 ? (
            <NoResult>
              <img src={DrawingPets} alt="no result" style={{ width: "220px" }} />
              <Text fontSize="14px" textAlign="center">
                Tap the heart to collect the pets <br />
                you are interested in here.
              </Text>
            </NoResult>
          ) : (
            <>
              <PetInfoList />
              {/* 관심 동물 리스트로 바꾸기 */}
              {/* <Paginator /> */}
            </>
          )}
        </Contents>
      </Main>
    </Layout>
  );
};

const NoResult = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

export default SearchResultTemplate;
