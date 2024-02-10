import NavTab from "@components/molecules/NavTab";
import styled from "styled-components";

// currentPage 연결하고 selected=true / false 넣기
const NavBar = () => {
  return (
    <StyledNavBar>
      <NavTab type="home" selected={true} />
      <NavTab type="search" selected={false} />
      <NavTab type="user" selected={false} />
    </StyledNavBar>
  );
};

const StyledNavBar = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  position: fixed;
  bottom: 0;
`;

export default NavBar;
