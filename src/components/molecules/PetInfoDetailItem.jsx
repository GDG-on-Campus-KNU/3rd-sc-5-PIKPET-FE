import ButtonTag from "@components/atoms/ButtonTag";
import ButtonMiniCTA from "@components/atoms/ButtonMiniCTA";
import Icon from "@components/atoms/Icon";
import Img from "@components/atoms/Img";

import styled from "styled-components";
import {
  ContainerIncludingImg,
  InnerContainerIncludingImg1,
  InnerContainerIncludingImg2,
  ContainerNameAndIcon,
} from "@styles/Container";
import Text from "@styles/Text";

const FONT_SIZE = "14px";

const PetInfoDetailItem = ({ title, content }) => {
  return (
    <StyledPetInfoDetailItem flexDirection={title === "Neutralized" ? "row" : "column"}>
      {/* 제목 */}
      <Text fontSize={FONT_SIZE} fontWeight="bold">
        {title}
      </Text>

      {/* 내용을 제목(중성화, 질병, 검진/접종, 코멘트)에 따라 다르게 셋 */}
      {title === "Neutralized" &&
        (content ? (
          <ButtonTag item="Yes" isSelected={true} />
        ) : (
          <ButtonTag item="No" isSelected={false} />
        ))}

      {title === "Diseases" && (
        <ContainerHealthInfo id="ContainerHealthInfo">
          {content.map((item) => (
            <ItemHealthInfo key={item.key}>
              <Text fontSize={FONT_SIZE}>{item.key}</Text>
              <ButtonTag item={item.value ? "recovered" : "undergoing"} selected={item.value} />
            </ItemHealthInfo>
          ))}
        </ContainerHealthInfo>
      )}

      {title === "Checkup/Vaccination" && (
        <ContainerHealthInfo id="ContainerHealthInfo">
          {content.map((item) => (
            <ItemHealthInfo key={item.key}>
              <Text fontSize={FONT_SIZE}>{item.key}</Text>
              <ButtonTag item={item.value ? "done" : "yet"} selected={item.value} />
            </ItemHealthInfo>
          ))}
        </ContainerHealthInfo>
      )}

      {title === "Comment" && <Text fontSize={FONT_SIZE}>{content}</Text>}
    </StyledPetInfoDetailItem>
  );
};

const StyledPetInfoDetailItem = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => (props.flexDirection === "row" ? "space-between" : null)};
  align-items: ${(props) => (props.flexDirection === "row" ? "center" : "flex-start")};
  gap: 12px;
`;

const ContainerHealthInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
`;

const ItemHealthInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default PetInfoDetailItem;
