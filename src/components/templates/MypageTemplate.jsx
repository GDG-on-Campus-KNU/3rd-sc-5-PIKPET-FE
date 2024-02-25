import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCurrentPageStore, useLoggedinStore } from "@store";

import Header from "@components/organisms/Header";
import NavBar from "@components/organisms/NavBar";
import Footer from "@components/organisms/Footer";
import CTAContainer from "@components/molecules/CTAContainer";
import ContainerTitle from "@components/atoms/ContainerTitle";
// import Img, { ImgGroup } from "@components/atoms/Img";
import InterestsThumbnailList from "@components/molecules/InterestsThumbnailList";
import profileUnset from "@assets/profile-unset.png";

import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/Layout";
import Text from "@styles/Text";

const MypageTemplate = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();
  const localIsLoggedin = localStorage.getItem("localIsLoggedin");

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage("/mypage");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  const handleViewInterests = () => {
    navigate("/interests");
  };

  // 로그아웃 버튼 클릭 ----------
  const handleLogout = () => {
    setIsLoggedin(false);
    localStorage.setItem("localIsLoggedin", false);
    navigate("/");
  };

  return (
    // <Layout backgroundColor="white">
    <Layout>
      <Header type="Mypage" />
      <Main>
        <Contents noPadding>
          <MypageProfile>
            <MypageProfileImg src={profileUnset} />
            <Text fontSize="20px" fontWeight="bold">
              juice
            </Text>
            <Text fontSize="14px">USER</Text>
          </MypageProfile>
          <MypageItem>
            <ContainerTitle title="My adoptions" />
            <Adoption>
              <AdoptionItem>
                <Text fontSize="14px" fontWeight="500">
                  Submitted
                </Text>
                <Text fontSize="24px" color={(props) => props.theme.colors.primary}>
                  1
                </Text>
              </AdoptionItem>
              <AdoptionItem>
                <Text fontSize="14px" fontWeight="500">
                  Ongoing
                </Text>
                <Text fontSize="24px" color={(props) => props.theme.colors.primary}>
                  1
                </Text>
              </AdoptionItem>
              <AdoptionItem>
                <Text fontSize="14px" fontWeight="500">
                  Done
                </Text>
                <Text fontSize="24px" color={(props) => props.theme.colors.gray}>
                  0
                </Text>
              </AdoptionItem>
            </Adoption>
          </MypageItem>
          <MypageItem>
            <ContainerTitle title="My interests" onClick={handleViewInterests} />
            <InterestsThumbnailList />
          </MypageItem>
          <MypageItem>
            <ContainerTitle title="Edit profile" />
          </MypageItem>
          <CTAContainer type="1ButtonLogout" title1="Log out" onClick={handleLogout} />
          <Footer />
        </Contents>
        <NavBar />
      </Main>
    </Layout>
  );
};

const MypageProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 50%;
`;

const MypageItem = styled.div`
  width: 100%;
  padding: 12px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: white;
`;

const MypageProfile = styled(MypageItem)`
  justify-content: center;
  align-items: center;
`;

const Adoption = styled.div`
  margin: 0 16px;
  display: flex;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.lightPrimary};
  // background-color: ${(props) => props.theme.colors.extraLightGray};
`;

const AdoptionItem = styled.div`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  gap: 4px;
`;

export default MypageTemplate;
