import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCurrentPageStore, useLoggedinStore } from "@store";

import Header from "@components/organisms/Header";
import LoginForm from "@components/organisms/LoginForm";

import Layout, { Main, Contents } from "@styles/Layout";
import Text from "@styles/Text";

const LoginTemplate = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage } = useCurrentPageStore();
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();

  // 로컬 스토리지 값 관리: 앱 리렌더링 시에도 값 보존 위함 ----------
  // 최초 마운트시에(만) 실행
  useEffect(() => {
    // 현재 페이지 경로를 상태로 저장
    setCurrentPage("/login");
    // console.log("currentPage: ", currentPage); // test
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬 스토리지에 저장
  }, [currentPage]);

  return (
    <Layout backgroundColor="white">
      <Header type="Login" />

      <Main>
        <Contents alignItems="center" gap="32px">
          <Text fontSize="32px" fontWeight="700" color={(props) => props.theme.colors.primary}>
            PIKPET
          </Text>
          <Text>Log in and enjoy PIKPET!</Text>
          <LoginForm />
        </Contents>
      </Main>
    </Layout>
  );
};

export default LoginTemplate;
