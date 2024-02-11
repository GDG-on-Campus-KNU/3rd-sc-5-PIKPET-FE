import { SiGithub, SiNotion } from "react-icons/si";
import { Text } from "@styles/text";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <Text fontSize="8px" fontWeight="600">
        ©️ 2024. PIKPET All rights reserved.
      </Text>
      <Text fontSize="8px">
        더 자세한 정보를 확인하려면 아래 웹사이트를 방문하십시오.
        <br />
        Visit our websites below for more information.
      </Text>
      <StyledIconGroup gap="narrow">
        <SiGithub />
        <SiNotion />
      </StyledIconGroup>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 100%;
  height: 84px;
  padding: 12px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  background-color: ${(props) => props.theme.colors.background};
`;

const StyledIconGroup = styled.div`
  display: flex;
  gap: ${(props) => (props.gap === "narrow" ? "12px" : "16px")};
`;

export default Footer;
