import Header from "@components/organisms/Header";
import Input from "@components/atoms/Input";
import ButtonCTA from "@components/atoms/ButtonCTA";

import Layout, { Main, Contents } from "@styles/layout";
import Text from "@styles/Text";

const LoginInput = () => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px" }}>
      <Input type="text" placeholder="이메일" />
      <Input type="password" placeholder="비밀번호" />
      <ButtonCTA type="Primary" title="로그인" />
    </div>
  );
};

const LoginTemplate = () => {
  return (
    <Layout backgroundColor="white">
      <Header type="Login" />

      <Main>
        <Contents alignItems="center" gap="32px">
          <Text fontColor="${props.theme.colors.primary}">PIKPET</Text>
          <Text>로그인 후 픽펫을 편리하게 이용하세요.</Text>
          <LoginInput />
        </Contents>
      </Main>
    </Layout>
  );
};

export default LoginTemplate;
