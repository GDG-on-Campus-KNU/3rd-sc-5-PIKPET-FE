import ButtonTag, { ButtonTagGroup } from "@components/atoms/ButtonTag";
import Input from "@components/atoms/Input";
import Toggle from "@components/atoms/Toggle";

import styled from "styled-components";
import Text from "@styles/Text";

// type (아이템 타입(ButtonTag, Input, Toggle, ...)) 필수
const InputItem = ({ type, title, items }) => {
  if (type === undefined) throw new Error("Undefined type of InputItem.");

  return (
    <StyledInputItem type={type}>
      <Text fontSize="14px" fontWeight="700">
        {title}
      </Text>

      {type === "ButtonTag" && items && (
        <ButtonTagGroup>
          {items.map((item, index) => (
            <ButtonTag key={index} item={item} />
          ))}
        </ButtonTagGroup>
      )}
      {type === "Input" && title === "Age" && (
        <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "4px" }}>
          <Input type="number" width="94px" fontSize="12px" />~
          <Input type="number" width="94px" fontSize="12px" />
        </div>
      )}
      {type === "Toggle" && <Toggle />}
    </StyledInputItem>
  );
};

const StyledInputItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === "Toggle" ? "row" : "column")};
  justify-content: ${(props) => (props.type === "Toggle" ? "space-between" : "none")};
  align-items: ${(props) => (props.type === "Toggle" ? "center" : "flex-start")};
  gap: 12px;
`;

export default InputItem;
