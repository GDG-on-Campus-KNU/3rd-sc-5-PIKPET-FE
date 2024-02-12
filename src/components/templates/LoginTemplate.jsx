import Header from "@components/organisms/Header";
import Input from "@components/atoms/Input";
import ButtonCTA from "@components/atoms/Input";

import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/layout";
import { Text } from "@styles/text";

import React from "react";

const LoginTemplate = () => {
  return (
    <Layout backgroundColor="white">
      <Header type="Login" />

      <Main></Main>
    </Layout>
  );
};

export default LoginTemplate;
