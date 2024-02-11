import NavTab from "@components/molecules/NavTab";
import styled from "styled-components";

// currentPage 연결하고 selected=true / false 넣기
const NavBar = () => {
  return (
    <StyledNavBar>
      <NavTab type="Home" selected={true} />
      <NavTab type="Search" selected={false} />
      <NavTab type="User" selected={false} />
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  position: sticky;
  bottom: 0;
  z-index: 1000;
`;

export default NavBar;
