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
  // const { selectedPetId } = store에서 관리
  // const petId = selectedPetId;

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage("/petinfodetail");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  // 임시
  const img = null;
  const name = "솜솜이";
  const interested = false;
  const breed = "Maltese";
  const age = "1";
  const gender = "Female";
  const height = 50; //cm
  const weight = 3; // kg
  const neutralized = true;
  const diseasesList = [
    { key: "Malnutrition", value: false },
    { key: "Eye trouble", value: true },
    { key: "Eye trouble", value: true },
  ];
  const checkupList = [
    { key: "General checkup", value: true },
    { key: "DA2PP", value: true },
    { key: "Anti-rabies vaccine", value: true },
    { key: "Kennel cough vaccine", value: true },
  ];
  const color = "White";
  const shelter = "00";
  const comment =
    "She is rescued on a cold winter day, and was very dwarfed at first because she didn't eat well. However, she is adaptable enough to quickly become a normal size while eating well here. She is lively and obedient, and she runs around briskly and makes everyone happy.";

  // 펫 정보 가져오기 통신 ----------
  //   useEffect(() => {
  //     axios
  //       .get(`/api/pet/${petId}`)
  //       .then((response) => {})
  //       .catch((error) => console.log(`An error occurred when fetching the pet info.`, error));
  //   }, []);

  const handleContact = () => {};

  const handleApply = () => {
    // navigate('/apply');
  };

  return (
    <Layout backgroundColor="white">
      <Header type="PetInfoDetail" />

      <Main>
        <Contents>
          <PetInfoDetail
            petId={null}
            img={img}
            name={name}
            interested={interested}
            breed={breed}
            age={age}
            gender={gender}
            height={height}
            weight={weight}
            color={color}
            neutralized={neutralized}
            diseasesList={diseasesList}
            checkupList={checkupList}
            shelter={shelter}
            comment={comment}
          />
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
