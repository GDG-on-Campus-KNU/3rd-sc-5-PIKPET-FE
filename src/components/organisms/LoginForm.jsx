import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useLoggedinStore } from "@store";

import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "@components/atoms/Input";
import ButtonCTA from "@components/atoms/ButtonCTA";
import { BASE_URL } from "@utils";

import styled from "styled-components";
import Text from "@styles/Text";

const UsernameInput = ({ username, setUsername }) => {
  //   console.log(`username: ${username}`);

  return (
    <Input
      type="text"
      placeholder="E-mail"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
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
        placeholder="Password"
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

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();

  const handleLogin = () => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    axios
      .post(`${BASE_URL}/login`, formData, { withCredentials: true })
      .then((response) => {
        const data = response.data;
        console.log(`data: ${data}`);

        // 유저 정보 저장
        const {
          email,
          password,
          phoneNumber,
          gender,
          age,
          address,
          job,
          userRole,
          authorities,
        } = data;
        setUserInfo({
          email,
          password,
          phoneNumber,
          gender,
          age,
          address,
          job,
          userRole,
          authorities,
        });

        // console.log(`headers: ${response.headers}`); // 헤더 전체 확인
        console.log(`Set-Cookie: ${response.headers["Set-Cookie"]}`); // 쿠키 값 확인
        if (response.data && response.headers["Set-Cookie"]) {
          setIsLoggedin(true);
        }
        console.log(`Login succeed: ${isLoggedin}`); // test
        if (isLoggedin === true) navigate("/");
      })
      .catch((error) => {
        console.error(`An error occurred during login.`, error);
      });
  };

  return (
    <StyledLoginForm>
      <StyledLoginInput>
        <UsernameInput username={username} setUsername={setUsername} />
        <PasswordInput password={password} setPassword={setPassword} />
      </StyledLoginInput>
      <ButtonCTA
        type={username && password ? "Primary" : "PrimaryDisabled"}
        title="Log in"
        onClick={handleLogin}
      />
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const StyledLoginInput = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default LoginForm;
