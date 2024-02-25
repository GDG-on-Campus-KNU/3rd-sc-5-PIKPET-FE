import { useEffect } from "react";
import { useCurrentPageStore, useInterestsStore } from "@store";
import axios from "axios";

import Header from "@components/organisms/Header";
// import SearchFilterDropdown from "@components/organisms/SearchFilterDropdown";
import NoResultNoti from "@components/organisms/NoResultNoti";
// import PetInfoList from "@components/organisms/PetInfoList";
import InterestsList from "@components/organisms/InterestsList";
// import Paginator from "@components/organisms/Paginator";
import { fetchInterests, changeInterested } from "@/utils/interestsService";

// import styled from "styled-components";
import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/Layout";
import { usePetInfoStore } from "../../store/store"; // test

const SearchResultTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  // const { isLoggedin, setIsLoggedin } = useLoggedinStore();
  const { interestsList, setInterestsList, addInterest, numberOfInterests, setNumberOfInterests } =
    useInterestsStore();
  const { numberOfElements, setNumberOfElements } = usePetInfoStore(); // test

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
    fetchInterests(setNumberOfInterests, addInterest);
  }, []);

  // const NUM = 0; // test

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
            <NoResultNoti
              content={
                <>
                  Tap the heart to collect the pets.
                  <br />
                  You are interested in here.
                </>
              }
            />
          ) : (
            <>
              <InterestsList />
              {/* <Paginator /> */}
            </>
          )}
        </Contents>
      </Main>
    </Layout>
  );
};

export default SearchResultTemplate;
