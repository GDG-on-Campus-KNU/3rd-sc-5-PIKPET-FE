import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCurrentPageStore } from "@store";

import Header from "@components/organisms/Header";
import LoginForm from "@components/organisms/LoginForm";

import Layout, { Main, Contents } from "@styles/layout";
import Text from "@styles/Text";

const LoginTemplate = () => {
  const navigate = useNavigate;
  const { currentPage, setCurrentPage } = useCurrentPageStore();

  // 최초 마운트시에(만) setCurrentPage
  useEffect(() => {
    setCurrentPage("/login");
    localStorage.setItem("currentPage", JSON.stringify(currentPage)); // 로컬스토리지에 저장 (앱 리렌더링 시에도 값 보존 위해서)
  }, []);

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
