import Dropdown, { DropdownGroup } from "@components/atoms/Dropdown";

import styled from "styled-components";
import Text from "@styles/Text";

const SearchFilterDropdown = () => {
  return (
    <DropdownGroup>
      <Dropdown title="종" />
      <Dropdown title="품종" />
    </DropdownGroup>
  );
};

export default SearchFilterDropdown;
