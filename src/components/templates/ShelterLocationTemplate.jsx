import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useCurrentPageStore } from "@store";

import Header from "@components/organisms/Header";
import Map from "@components/organisms/Map";

import Layout, { Main, Contents } from "@styles/layout";

const ShelterLocationTemplate = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const params = useParams();
  const petId = params.petId; // useParams를 통해 URL에서 가져온 petId

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage(`/pet/${petId}/location`);
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  // 지도에 핀 찍을 위도와 경도
  const lat = 35;
  const lng = 128;

  return (
    <Layout backgroundColor="white">
      <Header type="PetInfoDetail" />

      <Main>
        <Map lat={lat} lng={lng} />
      </Main>
    </Layout>
  );
};

export default ShelterLocationTemplate;
