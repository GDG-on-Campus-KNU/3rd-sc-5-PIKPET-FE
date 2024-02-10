import NavButton from "@components/atoms/NavButton";
import styled from "styled-components";

// currentPage 연결하고 selected=true / false 넣기
const NavBar = () => {
  return (
    <StyledNavBar>
      <NavButton type="home" selected={true} />
      <NavButton type="search" selected={false} />
      <NavButton type="user" selected={false} />
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
