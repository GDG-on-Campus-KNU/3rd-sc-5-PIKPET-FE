import React from "react";

const ApplyTemplate = () => {
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로 저장
    setCurrentPage("/");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장
  }, [currentPage]);

  return (
    <Layout>
      <Header type="Apply" />

      <Main>
        <Contents noPadding></Contents>

        <CTAContainer type="2ButtonUneven" title1="Backward" title2="Forward" />
      </Main>
    </Layout>
  );
};

export default ApplyTemplate;
