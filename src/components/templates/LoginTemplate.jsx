import Header from "@components/organisms/Header";
import LoginInputContainer from "@components/organisms/LoginInputContainer";

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
          <Text>로그인 후 픽펫을 편리하게 이용하세요.</Text>
          <LoginInputContainer />
        </Contents>
      </Main>
    </Layout>
  );
};

export default LoginTemplate;
