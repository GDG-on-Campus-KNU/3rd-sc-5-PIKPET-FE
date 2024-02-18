import { useState } from "react";
import { useTagsStore } from "@store";

import ButtonTag, { ButtonTagGroup } from "@components/atoms/ButtonTag";
import Input from "@components/atoms/Input";
import Toggle from "@components/atoms/Toggle";

import styled from "styled-components";
import Text from "@styles/Text";

// type (아이템 타입(ButtonTag, Input, Toggle, ...)) 필수
const InputItem = ({ type, title, items }) => {
  const {
    speciesTagsList,
    addSpeciesTag,
    removeSpeciesTag,
    breedTagsList,
    addBreedTag,
    minAge,
    setMinAge,
    maxAge,
    setMaxAge,
    genderTagsList,
    addGenderTag,
    sizeTagsList,
    addSizeTag,
    colorTagsList,
    addColorTag,
    neutralized,
    setNeutralized,
  } = useTagsStore();
  const [isSelected, setIsSelected] = useState(false); // 각 item에 각각 isSelected를 달아야 함 ㅠㅜㅠㅜㅠㅜㅠㅠㅠㅠ

  const setTags = (item) => {
    if (title === "Species") {
      setIsSelected(!isSelected);

      if (isSelected === false) addSpeciesTag(item);
      else removeSpeciesTag(item);

      console.log(`speciesTagList: ${speciesTagsList}`); // test용
    } else if (title === "Breed") {
      setIsSelected(!isSelected);

      addBreedTag(item);
      console.log(`breedTagsList: ${breedTagsList}`); // text용
    }
  };

  const handleSetMinAge = (value) => {
    setMinAge(value);
    console.log(`minAge: ${minAge}`); // text용
  };

  const handleSetMaxAge = (value) => {
    setMaxAge(value);
    console.log(`maxAge: ${maxAge}`); // text용
  };

  if (type === undefined) throw new Error("Undefined type of InputItem.");
  return (
    <StyledInputItem type={type}>
      <Text fontSize="14px" fontWeight="700">
        {title}
      </Text>

      {type === "ButtonTag" && items && (
        <ButtonTagGroup>
          {items.map((item, index) => (
            <ButtonTag
              key={index}
              item={item}
              isSelected={isSelected}
              onClick={() => setTags(item)}
            />
          ))}
        </ButtonTagGroup>
      )}
      {type === "Input" && title === "Age" && (
        <form style={{ width: "100%", display: "flex", alignItems: "center", gap: "4px" }}>
          <Input
            type="number"
            value={minAge}
            onChange={(e) => handleSetMinAge(e.target.value)} // value prop의 값을 파라미터로 넘기기
            width="94px"
            fontSize="12px"
          />
          ~
          <Input
            type="number"
            value={maxAge}
            onChange={(e) => handleSetMaxAge(e.target.value)} // value prop의 값을 파라미터로 넘기기
            width="94px"
            fontSize="12px"
          />
        </form>
      )}
      {type === "Toggle" && <Toggle />}
    </StyledInputItem>
  );
};

const StyledInputItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === "Toggle" ? "row" : "column")};
  justify-content: ${(props) => (props.type === "Toggle" ? "space-between" : "none")};
  align-items: ${(props) => (props.type === "Toggle" ? "center" : "flex-start")};
  gap: 12px;
`;

export default InputItem;
