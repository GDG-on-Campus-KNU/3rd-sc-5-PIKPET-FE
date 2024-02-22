import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
// import { useCookies } from "react-cookie";
import { useLoggedinStore } from "@store";

import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "@components/atoms/Input";
import ButtonCTA from "@components/atoms/ButtonCTA";

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
  // const [cookies, setCookie, removeCookie] = useCookies(["JSESSIONID"]);
  const { isLoggedin, setIsLoggedin } = useLoggedinStore();

  const handleLogin = () => {
    // test: 쿠키 포함 요청 전송되는지 ----------
    // axios
    //   .get(`api/userInfo`)
    //   .then((response) => {
    //     const data = response.data;
    //     console.log(`data:`, data); // 바디 확인
    //     console.log("---");
    //   })
    //   .catch((error) => {
    //     console.error(`An error occurred during login.`, error);
    //   });

    // login 요청 보내기 ----------
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    axios
      .post(`/api/login`, formData, { withCredentials: true })
      .then((response) => {
        const data = response.data;
        // console.log(`data:`, data); // data 확인

        const headers = response.headers;
        // console.log(`headers:`, headers); // 헤더 전체 확인

        // const sessionId = cookies.JSESSIONID; // 쿠키의 JSESSIONID를 sessionId에 저장
        // console.log(`sessionId: ${sessionId}`);

        setIsLoggedin(true);
        localStorage.setItem("localIsLoggedin", "true"); // 로컬스토리지에 저장 (앱 리렌더링 시에도 값 보존 위해서)
      })
      .catch((error) => {
        console.error(`An error occurred during login.`, error);
      });
  };

  useEffect(() => {
    const localIsLoggedin = localStorage.getItem("localIsLoggedin");

    if (localIsLoggedin === "true") {
      navigate("/");
      // console.log("Login succeed: ", localIsLoggedin); // test
    }
  }, [isLoggedin, navigate]);

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
