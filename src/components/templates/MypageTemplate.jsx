import Header from "@components/organisms/Header";
import NavBar from "@components/organisms/NavBar";

import Layout, { Main, Contents } from "@styles/layout";
import Text from "@styles/Text";

const MypageTemplate = () => {
  return (
    <Layout backgroundColor="white">
      <Header type="Mypage" />
      <Main>
        <Contents></Contents>
        <NavBar />
      </Main>
    </Layout>
  );
};

export default MypageTemplate;
