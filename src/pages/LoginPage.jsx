import React, { useState } from "react";
import { useHistory } from "react-router";
import { Login } from "../api/UserService.js";
import { setUser } from "../redux/userReducer.js";
import { useDispatch } from "react-redux";
import LoginPageWrapper from "../styled/SigninWrapper";
import { Button, TextField } from "@material-ui/core";
import { Open, severities } from "../redux/toast.js";

function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Login(username, password);
    if (!response.error) {
      localStorage.setItem("authtoken", response.data.token);
      dispatch(setUser({ ...response.data }));
      history.push("/");
    } else {
      console.log(response.data);
      dispatch(Open({ message: response.data, severity: severities.error }));
    }
  };

  return (
    <LoginPageWrapper>
      <form>
        <h2>Giriş Yap</h2>
        <TextField
          value={username}
          name={"email"}
          placeholder={"Kullanıcı Adı"}
          required
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
        <TextField
          value={password}
          name={"password"}
          type={"password"}
          required
          placeholder={"Şifre"}
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <Button type={"submit"} variant={"contained"} color={"primary"} onClick={(e) => handleSubmit(e)}>
          Giriş Yap
        </Button>
        <p>
          Hesabınız yok mu? <mark onClick={() => history.push("/signup")}>Kayıt Ol</mark>
        </p>
      </form>
    </LoginPageWrapper>
  );
}

export default LoginPage;
