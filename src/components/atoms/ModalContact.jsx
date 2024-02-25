import { useEffect, useRef } from "react";
// import ReactDOM from "react-dom";
import { useModalStore, usePetInfoDetailStore } from "@store";

// import { SiGithub, SiNotion } from "react-icons/si";
import Icon from "@components/atoms/Icon";

import styled from "styled-components";
import Text from "@styles/Text";

const FONT_SIZE = "14px";

// const modalRoot = document.getElementById("modal-root");

const ModalContact = () => {
  const { isModalOpen, openModal, closeModal } = useModalStore();
  const { petInfoDetail } = usePetInfoDetailStore();

  // X 버튼 눌러 끄기 ========================================================
  const handleCloseModal = () => {
    closeModal();
  };

  // 모달 외부 클릭 시 끄기 ===================================================
  // Modal 창을 useRef로 취득
  // const modalRef = useRef < HTMLDivElement > null;
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  }, []);

  return (
    <StyledModal ref={modalRef}>
      <IconWrapper>
        <Icon src="IconXMono" onClick={handleCloseModal} />
      </IconWrapper>
      <ModalItem title="Telephone" content={petInfoDetail.shelter.contact} />
    </StyledModal>
  );
};

const StyledModal = styled.div`
  width: 40%;
  padding: 32px 32px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

// 아이콘을 감싸는 부모 요소: 모달창은 absolute, X 아이콘은 relative여야 하기 때문에 만듦
const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ModalItem = ({ title, content }) => {
  return (
    <StyledModalItem>
      <Text fontSize={FONT_SIZE} fontWeight="bold">
        {title}
      </Text>
      <Text fontSize={FONT_SIZE}>{content}</Text>
    </StyledModalItem>
  );
};

const StyledModalItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default ModalContact;
