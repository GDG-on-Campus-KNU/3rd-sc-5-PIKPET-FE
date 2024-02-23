import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useCurrentPageStore, usePetInfoDetailStore } from "@store";
import axios from "axios";

import Header from "@components/organisms/Header";
import PetInfoDetail from "@components/organisms/PetInfoDetail";
import CTAContainer from "@components/molecules/CTAContainer";

import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/layout";

const PetInfoDetailTemplate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const petId = params.petId; // useParams를 통해 URL에서 가져온 petId
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { petInfoDetail, setPetInfoDetail } = usePetInfoDetailStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage(`/pet/${petId}`);
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  // 펫 정보 가져오기 통신 ===================================
  useEffect(() => {
    axios
      .get(`/api/api/animals/${petId}`)
      .then((response) => {
        const data = response.data;
        console.log("data: ", data); // 응답 데이터 확인

        // data 구조 분해 할당
        const {
          id,
          imageUrl,
          imInterested,
          species,
          breed,
          age,
          gender,
          size,
          disease,
          shelter,
          neutralized,
          checkUp,
          captureDate,
          euthanasiaDate,
          color,
        } = data;

        // 스토어에 펫 정보 한꺼번에 저장
        setPetInfoDetail({
          id,
          imageUrl,
          imInterested,
          species,
          breed,
          age,
          gender,
          size,
          disease,
          shelter,
          neutralized,
          checkUp,
          captureDate,
          euthanasiaDate,
          color,
        });
        // console.log("petInfoDetail: ", petInfoDetail); // for test
      })
      .catch((error) =>
        console.error(`An error occurred when fetching the pet info detail.`, error)
      );
  }, []);

  // show shelter contact info ============================
  const handleContact = () => {
    console.log("contact: ", petInfoDetail.shelter.contact);
  };

  // move to Application page =============================
  const handleApply = () => {
    // navigate('/apply');
  };

  return (
    <Layout backgroundColor="white">
      <Header type="PetInfoDetail" />

      <Main>
        <Contents>
          <PetInfoDetail petId={petId} />
        </Contents>

        <CTAContainer
          type="2ButtonEven"
          title1="Contact"
          title2="Apply"
          onClick1={handleContact}
          onClick2={handleApply}
        />
      </Main>
    </Layout>
  );
};

export default PetInfoDetailTemplate;
