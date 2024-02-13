import NavTab from "@components/molecules/NavTab";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNavBar>
      <NavTab type="Home" selected={currentPage === "/" ? true : false} />
      <NavTab type="Search" selected={currentPage === "/search" ? true : false} />
      <NavTab type="User" selected={currentPage === "/mypage" ? true : false} />
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
