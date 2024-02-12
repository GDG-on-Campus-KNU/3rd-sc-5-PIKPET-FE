import { useState, useEffect } from "react";
import Icon from "@components/atoms/Icon";
import Input from "@components/atoms/Input";

import styled from "styled-components";

// 나중에 추상화
// const SearchBar = ({ keyword }) => {
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyworld = (e) => {
    setKeyword(e.target.value);
  };

  //   // 확인용
  //   useEffect(() => {
  //     console.log(`keyword: ${keyword}`);
  //   }, [keyword]);

  const handleClickX = () => {
    setKeyword("");
  };

  return (
    <StyledSearchBar>
      <Icon src="IconBackward" />
      <StyledSearchInput>
        <Icon src="IconSearchMono" />
        <Input
          value={keyword}
          onChange={handleChangeKeyworld}
          type="text"
          placeholder="검색어 입력 또는 이미지 업로드"
          paddingX="0"
          paddingY="0"
          border="none"
          borderRadius="0"
          backgroundColor={(props) => props.theme.colors.background}
        />
        {keyword ? (
          <Icon src="IconXCircle" width="16px" height="16px" onClick={handleClickX} />
        ) : (
          <></>
        )}
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
  gap: 12px;
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
  gap: 10px;
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
