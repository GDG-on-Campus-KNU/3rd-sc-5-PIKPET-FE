import { Link } from "react-router-dom";
import { SiGithub, SiNotion } from "react-icons/si";

import { GITHUB_URL, NOTION_URL } from "@utils/utils";

import styled from "styled-components";
import Text from "@styles/Text";

const Footer = () => {
  return (
    <StyledFooter>
      <Text fontSize="12px" fontWeight="600">
        ©️ 2024. PIKPET All rights reserved.
      </Text>
      <Websites>
        <Text fontSize="12px">Visit our websites below for more information.</Text>
        <StyledIconGroup gap="narrow">
          <Link to={GITHUB_URL} style={{ color: "black" }}>
            <SiGithub />
          </Link>
          <Link to={NOTION_URL} style={{ color: "black" }}>
            <SiNotion />
          </Link>
        </StyledIconGroup>
      </Websites>
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
  gap: 24px;

  background-color: ${(props) => props.theme.colors.background};
`;

const Websites = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledIconGroup = styled.div`
  display: flex;
  gap: ${(props) => (props.gap === "narrow" ? "12px" : "16px")};
`;

export default Footer;
