import { useState } from "react";
import { useSearchTagsStore } from "@store";

import ButtonTag, { ButtonTagGroup } from "@components/atoms/ButtonTag";
import Input from "@components/atoms/Input";
import Toggle from "@components/atoms/Toggle";

import styled from "styled-components";
import Text from "@styles/Text";

// type (ButtonTag, Input, Toggle, ...) 필수 -> 스타일 설정 위함
const FilterItem = ({ type, title, children }) => {
  if (type === undefined) throw new Error("Undefined type of FilterItem.");
  return (
    <StyledFilterItem type={type}>
      <Text fontSize="14px" fontWeight="700">
        {title}
      </Text>
      {children}
    </StyledFilterItem>
  );
};

const StyledFilterItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === "Toggle" ? "row" : "column")};
  justify-content: ${(props) => (props.type === "Toggle" ? "space-between" : "none")};
  align-items: ${(props) => (props.type === "Toggle" ? "center" : "flex-start")};
  gap: 12px;
`;

export default FilterItem;
