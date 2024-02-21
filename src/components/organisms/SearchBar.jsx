import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useKeywordsStore, useSearchImgStore } from "@store";

import Icon from "@components/atoms/Icon";
import Input from "@components/atoms/Input";

import styled from "styled-components";
import Text from "@styles/Text";

const SearchBar = ({ onClick }) => {
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
  const [fileName, setFileName] = useState(""); // 파일명

  const handleUploadImg = () => {
    imgInputRef.current.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name); // 파일명 설정

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      let uploadedImage = reader.result || null;
      // console.log(uploadedImage); // fot test

      // 이미지 파일을 formData 객체에 추가
      const formData = new FormData();
      formData.append("file", file);
      // for (let pair of formData.entries()) {
      //   console.log("key:", pair[0] + ", value: " + pair[1]);
      // } // for test
      // console.log("file: ", formData.get("file")); // fot test

      setSearchImg(formData); // 상태 관리 값으로 저장
    };
  };

  return (
    <StyledSearchBar>
      <StyledSearchBar_1>
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
          {keywords && (
            <Icon src="IconXCircle" width="16px" height="16px" onClick={removeAll} />
          )}
        </StyledSearchInput>
        {/* 파일 업로드 입력 요소 */}
        <input
          type="file"
          accept="image/*"
          ref={imgInputRef} // 버튼과 연결
          style={{ display: "none" }} // 화면에는 보이지 않음
          onChange={onFileChange} // 파일이 선택되면 실행
        />

        <Icon
          // src={fileName ? "IconPictureSelected" : "IconPictureMono"}
          src="IconPictureSelected"
          onClick={handleUploadImg}
        />
      </StyledSearchBar_1>

      {fileName && (
        <ContainerImgSendButton>
          <div>
            <Text fontSize="14px">IMAGE: {fileName}</Text>
          </div>
          <ImgSendButton onClick={onClick}>Send</ImgSendButton>
        </ContainerImgSendButton>
      )}
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;

  position: sticky;
  top: 0;
`;

const StyledSearchBar_1 = styled.div`
  width: 100%;
  height: 54px;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  background-color: white;
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

const ContainerImgSendButton = styled.div`
  width: 100%;
  padding: 4px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  gap: 8px;
`;

const ImgSendButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 14px;
`;

export default SearchBar;
