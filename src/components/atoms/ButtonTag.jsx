import { useState, useEffect } from "react";
import { useSearchTagsStore } from "@store";

import styled from "styled-components";

const ButtonTag = ({ item, isSelected, paddingX, paddingY, fontSize, ...rest }) => {
  if (item === null) throw new Error("item prop is neccessary.");

  // const [isSelected, setIsSelected] = useState(false);
  // const handleClickButtonTag = () => {};

  return (
    <StyledButtonTag
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize={fontSize}
      selected={isSelected}
      // onClick={handleClickButtonTag}
      {...rest}
    >
      {item}
    </StyledButtonTag>
  );
};

const ButtonFilterTag = ({ item, category, paddingX, paddingY, fontSize, ...rest }) => {
  if (item === null) throw new Error("item prop is neccessary.");
  if (category === null) throw new Error("category prop is neccessary.");

  const [isSelected, setIsSelected] = useState(false);
  const {
    speciesTagsList,
    addSpeciesTag,
    removeSpeciesTag,
    breedTagsList,
    addBreedTag,
    removeBreedTag,
    genderTagsList,
    addGenderTag,
    removeGenderTag,
    sizeTagsList,
    addSizeTag,
    removeSizeTag,
    colorTagsList,
    addColorTag,
    removeColorTag,
  } = useSearchTagsStore();

  const handleClickButtonTag = () => {
    if (category === "Species") {
      if (isSelected === false) {
        addSpeciesTag(item);
      } else {
        removeSpeciesTag(item);
      }
      // console.log(`speciesTagsList: ${speciesTagsList}`); // test용
    } else if (category === "Breed") {
      if (isSelected === false) {
        addBreedTag(item);
      } else {
        removeBreedTag(item);
      }
      // console.log(`breedTagsList: ${breedTagsList}`); // test용
    } else if (category === "Gender") {
      if (isSelected === false) {
        addGenderTag(item);
      } else {
        removeGenderTag(item);
      }
      // console.log(`genderTagsList: ${genderTagsList}`); // test용
    } else if (category === "Size") {
      if (isSelected === false) {
        addSizeTag(item);
      } else {
        removeSizeTag(item);
      }
      // console.log(`sizeTagsList: ${sizeTagsList}`); // test용
    } else if (category === "Color") {
      if (isSelected === false) {
        addColorTag(item);
      } else {
        removeColorTag(item);
      }
      // console.log(`colorTagsList: ${colorTagsList}`); // test용
    } else throw new Error("Undefined type of category");

    setIsSelected(!isSelected); // isSelected 값을 반대로 바꾸기
  };

  // 모든 태그 삭제(refresh)했을 때 태그의 선택 상태를 false로
  useEffect(() => {
    const tagLists = {
      Species: speciesTagsList,
      Breed: breedTagsList,
      Gender: genderTagsList,
      Size: sizeTagsList,
      Color: colorTagsList,
    };

    // 카테고리에 해당하는 태그 리스트를 가져옴
    const selectedTagList = tagLists[category];

    // 선택된 항목이 리스트에 포함되지 않으면 선택 상태를 false로 설정
    if (!selectedTagList.includes(item)) {
      setIsSelected(false);
    }
  }, [speciesTagsList, breedTagsList, genderTagsList, sizeTagsList, colorTagsList]);

  return (
    <StyledButtonTag
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize={fontSize}
      selected={isSelected}
      onClick={handleClickButtonTag}
      {...rest}
    >
      {item}
    </StyledButtonTag>
  );
};

const StyledButtonTag = styled.button`
  padding: ${(props) => props.paddingY || "4px"} ${(props) => props.paddingX || "12px"};
  box-sizing: border-box;
  border-radius: 50px;
  background-color: white;
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: 400;
  // font-family: ${(props) => props.theme.fontBody};

  border: 1px solid
    ${(props) => (props.selected ? props.theme.colors.primary : props.theme.colors.lightGray)};
  color: ${(props) => (props.selected ? props.theme.colors.primary : "black")};
`;

const ButtonTagGroup = ({ children }) => {
  return <StyledButtonTagGroup>{children}</StyledButtonTagGroup>;
};

const StyledButtonTagGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

export default ButtonTag;
export { StyledButtonTag, ButtonFilterTag, ButtonTagGroup };
