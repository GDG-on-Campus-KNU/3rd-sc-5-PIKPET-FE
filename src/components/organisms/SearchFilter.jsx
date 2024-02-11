import ButtonTag from "@components/atoms/ButtonTag";
import Input from "@components/atoms/Input";

import styled from "styled-components";
import { Text } from "@styles/text";

const SearchFilter = () => {
  return (
    <StyledSearchFilter>
      <Text fontWeight="700">검색 필터</Text>
    </StyledSearchFilter>
  );
};

const StyledSearchFilter = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default SearchFilter;
