import ButtonTag, { ButtonTagGroup } from "@components/atoms/ButtonTag";
import Input from "@components/atoms/Input";
import Toggle from "@components/atoms/Toggle";

import styled from "styled-components";
import { Text } from "@styles/text";

// type (아이템 타입(ButtonTag, Input, ...)) 필수
const InputItem = ({ type, title, items }) => {
  if (type === undefined) throw new Error("Undefined type of InputItem.");

  return (
    <StyledInputItem>
      <Text fontSize="14px" fontWeight="700">
        {title}
      </Text>

      {type === "ButtonTag" && items && (
        <ButtonTagGroup>
          {items.map((item, index) => (
            <ButtonTag key={index} type="Default" item={item} />
          ))}
        </ButtonTagGroup>
      )}
      {type === "Input" && (
        <div>
          <Input />~<Input />세
        </div>
      )}
      {type === "Toggle" && <Toggle />}
    </StyledInputItem>
  );
};

//  <ButtonTag type="Default" title="고양이" />

const StyledInputItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default InputItem;
