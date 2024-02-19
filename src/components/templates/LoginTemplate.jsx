import Header from "@components/organisms/Header";
import LoginForm from "@components/organisms/LoginForm";

import Layout, { Main, Contents } from "@styles/layout";
import Text from "@styles/Text";

const LoginTemplate = () => {
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
