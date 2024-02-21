import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCurrentPageStore } from "@store";

import Header from "@components/organisms/Header";
import PetInfoDetail from "@components/organisms/PetInfoDetail";
import CTAContainer from "@components/molecules/CTAContainer";

import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/layout";

const PetInfoDetailTemplate = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage } = useCurrentPageStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage("/petinfodetail");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  const handleContact = () => {};

  const handleApply = () => {
    // navigate('/apply');
  };

  return (
    <Layout backgroundColor="white">
      <Header type="PetInfoDetail" />

      <Main>
        <Contents>
          <PetInfoDetail petId={null} img={null} name="솜솜이" />
        </Contents>
        <CTAContainer
          type="2ButtonEven"
          title1="연락하기"
          title2="입양 신청"
          onClick1={handleContact}
          onClick2={handleApply}
        />
      </Main>
    </Layout>
  );
};

export default PetInfoDetailTemplate;
