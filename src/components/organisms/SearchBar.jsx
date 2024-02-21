import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useKeywordsStore, useSearchImgStore } from "@store";

import Icon from "@components/atoms/Icon";
import Input from "@components/atoms/Input";

import styled from "styled-components";

const SearchBar = () => {
  const navigate = useNavigate();
  const { keywords, setKeywords, keywordsList, setKeywordsList, removeKeywordsList } =
    useKeywordsStore();
  // const [keywords, setKeywords] = useState("");
  // const [keywordsList, setKeywordsList] = useState([]);
  const { searchImg, setSearchImg } = useSearchImgStore();

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

  // 사진 업로드 ----------
  const imgInputRef = useRef(null);

  const handleUploadImg = () => {
    imgInputRef.current.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      let uploadedImage = reader.result || null;
      setSearchImg(uploadedImage); // 임시 저장

      // Base64 문자열을 디코딩하여 ArrayBuffer를 생성

      uploadedImage = uploadedImage.substring(uploadedImage.indexOf(",") + 1);
      const binaryString = atob(uploadedImage);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const arrayBuffer = bytes.buffer;

      // ArrayBuffer를 Blob 객체로 변환
      const blob = new Blob([arrayBuffer], { type: "image/jpeg" });

      // Blob 객체를 URL로 변환
      const uploadedImageUrl = URL.createObjectURL(blob).substring(5);

      console.log(`image url to send: ${uploadedImageUrl}`); // test용
      // dispatch(userAction.setProfileImg(uploadedImageUrl)); // test용
    };
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
      {/* 파일 업로드 입력 요소 */}
      <input
        type="file"
        accept="image/*"
        ref={imgInputRef} // 버튼과 연결
        style={{ display: "none" }} // 화면에는 보이지 않음
        onChange={onFileChange} // 파일이 선택되면 실행
      />
      <Icon src="IconPictureMono" onClick={handleUploadImg} />
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
