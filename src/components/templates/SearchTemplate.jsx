import styled from "styled-components";

import SearchBar from "@components/organisms/SearchBar";
import ButtonTag from "@components/atoms/ButtonTag";
import Input from "@components/atoms/Input";
import ButtonCTA from "@components/atoms/ButtonCTA";
import CTAContainer from "@components/molecules/CTAContainer";

const SearchTemplate = () => {
  return (
    <ResponsiveLayout>
      <SearchBar />
      Search
    </ResponsiveLayout>
  );
};

export default SearchTemplate;
