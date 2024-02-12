import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "@components/atoms/Input";
import ButtonCTA from "@components/atoms/ButtonCTA";

import styled from "styled-components";
import Text from "@styles/Text";

const EmailInput = ({ email, setEmail }) => {
  //   console.log(`email: ${email}`);

  return (
    <Input
      type="text"
      placeholder="이메일"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
};

const PasswordInput = ({ password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledPasswordInput>
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledEyeIcon onClick={handleShowPassword} showPassword={showPassword} />
    </StyledPasswordInput>
  );
};

const StyledPasswordInput = styled.div`
  position: relative;
`;

const StyledEyeIcon = styled(({ showPassword, ...rest }) =>
  showPassword ? <FiEyeOff {...rest} /> : <FiEye {...rest} />
)`
  color: ${(props) => props.theme.colors.gray};
  position: absolute;
  top: 12px;
  right: 16px;
`;

const LoginInputContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledLoginInputContainer>
      <EmailInput email={email} setEmail={setEmail} />
      <PasswordInput password={password} setPassword={setPassword} />
      {/* <Input type="text" placeholder="이메일" /> */}
      {/* <Input type="password" placeholder="비밀번호" /> */}
      <ButtonCTA type={email && password ? "Primary" : "PrimaryDisabled"} title="로그인" />
    </StyledLoginInputContainer>
  );
};

const StyledLoginInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default LoginInputContainer;
