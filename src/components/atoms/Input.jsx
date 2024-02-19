import { useTagsStore } from "@store";

import styled from "styled-components";

const Input = ({
  type,
  placeholder,
  value,
  width,
  paddingX,
  paddingY,
  fontSize,
  border,
  borderRadius,
  backgroundColor,
  ...rest
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      width={width}
      paddingX={paddingX}
      paddingY={paddingY}
      fontSize={fontSize}
      border={border}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      {...rest}
    ></StyledInput>
  );
};

const StyledInput = styled.input`
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.paddingY || "12px"} ${(props) => props.paddingX || "16px"};
  box-sizing: border-box;
  font-size: ${(props) => props.fontSize || "14px"};
  border: ${(props) => props.border || `1px solid ${props.theme.colors.lightGray}`};
  border-radius: ${(props) => props.borderRadius || "10px"};
  background-color: ${(props) => props.backgroundColor || "white"};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const AgeInput = () => {
  const { minAge, setMinAge, maxAge, setMaxAge } = useTagsStore(); // 재사용성... 어차피 동물나이 인풋 받는 데밖에 사용 안 할듯

  const handleSetMinAge = (value) => {
    setMinAge(value);
  };

  const handleSetMaxAge = (value) => {
    setMaxAge(value);
  };

  return (
    <StyledAgeInput>
      <Input
        type="number"
        value={minAge !== null ? minAge : ""}
        onChange={(e) => handleSetMinAge(e.target.value)} // value prop의 값을 파라미터로 넘기기
        width="94px"
        fontSize="12px"
      />
      ~
      <Input
        type="number"
        value={maxAge !== null ? maxAge : ""}
        onChange={(e) => handleSetMaxAge(e.target.value)} // value prop의 값을 파라미터로 넘기기
        width="94px"
        fontSize="12px"
      />
    </StyledAgeInput>
  );
};

const StyledAgeInput = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default Input;
export { AgeInput };
