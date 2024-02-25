import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useCurrentPageStore, usePetInfoDetailStore, useModalStore } from "@store";
import axios from "axios";

import Header from "@components/organisms/Header";
import PetInfoDetail from "@components/organisms/PetInfoDetail";
import CTAContainer from "@components/molecules/CTAContainer";
import ModalContact from "@components/atoms/ModalContact";

import styled from "styled-components";
import Text from "@styles/Text";
import Layout, { Main, Contents } from "@styles/Layout";

const PetInfoDetailTemplate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const petId = params.petId; // useParams를 통해 URL에서 가져온 petId
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { petInfoDetail, setPetInfoDetail } = usePetInfoDetailStore();
  const { isModalOpen, openModal, closeModal } = useModalStore();

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
      .get(`/api/api/animal/${petId}`)
      .then((response) => {
        const data = response.data;
        console.log("data: ", data); // 응답 데이터 확인

        // data 구조 분해 할당
        const {
          id,
          imageUrl,
          isLiked,
          species,
          breed,
          age,
          gender,
          size,
          colors,
          isNeutralized,
          disease,
          checkUp,
          shelter,
          captureDate,
          euthanasiaDate,
        } = data;

        // 스토어에 펫 정보 한꺼번에 저장
        setPetInfoDetail({
          id,
          imageUrl,
          isLiked,
          species,
          breed,
          age,
          gender,
          size,
          colors,
          isNeutralized,
          disease,
          checkUp,
          shelter,
          captureDate,
          euthanasiaDate,
        });
        // console.log("petInfoDetail: ", petInfoDetail); // for test
      })
      .catch((error) =>
        console.error(`An error occurred when fetching the pet info detail.`, error)
      );
  }, []);

  // show shelter contact info ============================

  const handleClickContact = () => {
    // console.log("contact: ", petInfoDetail.shelter.contact); // for test
    openModal();
    // setIsDarkBackground(true); // 모달 열렸을 시 배경색 어둡게
  };

  // move to Application page =============================
  const handleApply = () => {
    navigate("/apply");
  };

  return (
    <>
      <Layout backgroundColor="white">
        <Header type="PetInfoDetail" />

        <Main>
          <Contents>
            <PetInfoDetail />
          </Contents>

          <CTAContainer
            type="2ButtonEven"
            title1="Contact"
            title2="Apply"
            onClick1={handleClickContact}
            onClick2={handleApply}
          />
        </Main>
      </Layout>
      {isModalOpen && <ModalContact />}
      {isModalOpen && <DarkBackgroundLayer />}
    </>
  );
};

const DarkBackgroundLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999; /* 모달보다 아래에 위치하도록 z-index 조절 */
  pointer-events: auto; /* 뒤에 깔린 것들 클릭 방지 */
`;

export default PetInfoDetailTemplate;
