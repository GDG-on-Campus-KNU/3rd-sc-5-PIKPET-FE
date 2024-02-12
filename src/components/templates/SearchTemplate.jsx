import SearchBar from "@components/organisms/SearchBar";
import SearchFilter from "@components/organisms/SearchFilter";
import CTAContainer from "@components/molecules/CTAContainer";

import styled from "styled-components";
import Layout, { Main, Contents } from "@styles/layout";

const SearchTemplate = () => {
  return (
    <Layout backgroundColor="white">
      <SearchBar />

      <Main padding0>
        <Contents>
          <SearchFilter />
        </Contents>
        <CTAContainer type="SearchFilter" />
      </Main>
    </Layout>
  );
};

export default SearchTemplate;
