import { useState } from "react";
import { useSearchTagsStore } from "@store";

import styled from "styled-components";

const StyledToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: ${(props) => props.theme.colors.lightGray};
  }

  > .toggle--checked {
    background-color: ${(props) => props.theme.colors.primary};
    transition: 0.3s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.3s;
  }

  > .toggle--checked {
    left: 27px;
    transition: 0.3s;
  }
`;

const Toggle = ({ isOn, onClick }) => {
  const handleClickToggle = () => {
    onClick();
  };

  return (
    <>
      <StyledToggleContainer onClick={handleClickToggle}>
        {/* 아래에 div 엘리먼트 2개가 있다. 각각의 클래스를 'toggle-container', 'toggle-circle' 로 지정 */}
        {/* Toggle Switch가 ON인 상태일 경우에만 toggle--checked 클래스를 div 엘리먼트 2개에 모두 추가. 조건부 스타일링을 활용*/}
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`} />
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
      </StyledToggleContainer>
    </>
  );
};

export default Toggle;
