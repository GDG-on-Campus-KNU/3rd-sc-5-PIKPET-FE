import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useKeywordsStore } from "@store";

import Icon from "@components/atoms/Icon";
import Input from "@components/atoms/Input";

import styled from "styled-components";

const SearchBar = () => {
  const navigate = useNavigate();
  const { keywords, setKeywords, keywordsList, setKeywordsList, removeKeywordsList } =
    useKeywordsStore();
  // const [keywords, setKeywords] = useState("");
  // const [keywordsList, setKeywordsList] = useState([]);

  const handleInput = (value) => {
    setKeywords(value);
    setKeywordsList(value);
  };

  // 확인용
  // useEffect(() => {
  //   console.log(`keywords: ${keywords}`);
  //   console.log(`keywordsList: ${keywordsList}`);
  // }, [keywords]);

  const goBackward = () => {
    navigate(-1);
  };

  const removeAll = () => {
    setKeywords("");
    removeKeywordsList();
  };

  return (
    <StyledSearchBar>
      <Icon src="IconBackward" onClick={goBackward} />
      <StyledSearchInput>
        <Icon src="IconSearchMono" />
        <Input
          value={keywords}
          onChange={(e) => handleInput(e.target.value)}
          type="text"
          placeholder="Put keywords or upload an image"
          paddingX="0"
          paddingY="0"
          border="none"
          borderRadius="0"
          backgroundColor={(props) => props.theme.colors.background}
        />
        {keywords && <Icon src="IconXCircle" width="16px" height="16px" onClick={removeAll} />}
      </StyledSearchInput>
      <Icon src="IconPicture" />
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  width: 100%;
  height: 54px;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: white;

  position: sticky;
  top: 0;
`;

const StyledSearchInput = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 8px 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 10px;

  input {
    width: 100%;
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }
`;

export default SearchBar;
