import { useState } from "react";
import styled from "styled-components";

const Dropdown = ({ title }) => {
  const [species, setSpecies] = useState("");

  const handleValueChange = (event) => {
    event.preventDefault();
    setMonth(event.target.value);
    console.log("You have selected ", month);
  };

  return (
    <StyledSelect name={title} value={species} onChange={handleValueChange}>
      <option value="강아지">강아지</option>
      <option value="고양이">고양이</option>
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  padding: 4px 12px;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 50px;
  font-size: 12px;
  color: black;
  background-color: white;
  outline: none;

  // &:focus {
  //   border-color: ${(props) => props.theme.colors.primary};
  // }
`;

const DropdownGroup = ({ children }) => {
  return <StyledDropdownGroup>{children}</StyledDropdownGroup>;
};

const StyledDropdownGroup = styled.div`
  display: flex;
  padding: 6px 0;
  width: 100%;
  overflow-x: auto;
  gap: 4px;
`;

export default Dropdown;
export { DropdownGroup };
