import { useEffect } from "react";
import { useCurrentPageStore, useLoggedinStore, useInterestsStore } from "@store";
import axios from "axios";

import Header from "@components/organisms/Header";
import SearchFilterDropdown from "@components/organisms/SearchFilterDropdown";
import NoResultNoti from "@components/organisms/NoResultNoti";
// import PetInfoList from "@components/organisms/PetInfoList";
import InterestsList from "@components/organisms/InterestsList";
import Paginator from "@components/organisms/Paginator";

// import styled from "styled-components";
import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/Layout";
import { usePetInfoStore } from "../../store/store"; // test

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
    axios
      .get(`api/userInfo/likeAnimal`)
      .then((response) => {
        const data = response.data;
        // console.log("data: ", data, "the number of entries: ", data.length); // for test
        // data = [{ id, userAccount, animal: { id, imageUrl, ... } }, { id, userAccount, animal: { id, imageUrl, ... } }, ...] // list

        // 필요한 데이터 추출하여 스토어에 저장 => 왜 데브툴즈에서는 뜨고 콘솔 로그 찍으면 안 뜨지?????????????
        setNumberOfInterests(data.length); // 관심 동물 건수 저장
        data.forEach((entry) => addInterest(entry.animal)); // 관심 동물 저장
        // console.log(
        //   "numberofInterests: ",
        //   numberOfInterests,
        //   "interestsList: ",
        //   interestsList
        // ); // for test

        // test
        // setNumberOfElements(data.length);
        // console.log("num: ", numberOfElements);
      })
      .catch((error) => {
        console.error(`An error occurred while fetching the interests.`, error);
      });
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
