import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Signup } from "../api/UserService.js";
import LoginPageWrapper from "../styled/SigninWrapper";
import { useDispatch } from "react-redux";
import { Open, severities } from "../redux/toast";
import { useHistory } from "react-router-dom";

function SignupPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password_1, setPassword_1] = useState("");
  const [password_2, setPassword_2] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password_1 || !password_2) {
      dispatch(Open({ message: "Tüm alanlar eksiksiz doldurulmalı", severity: severities.warning }));
      return;
    }
    if (password_1 !== password_2) {
      dispatch(Open({ message: "Şifreler aynı değil.", severity: severities.warning }));
      return;
    }

    const response = await Signup(username, password_1);
    if (!response.error) {
      dispatch(Open({ message: "Kayıt başarılı. Şimdi giriş yapabilirsiniz.", severity: severities.success }));
    } else {
      // show error messages
      dispatch(Open({ message: response.data, severity: severities.error }));
      console.log(response.data);
    }
  };

  return (
    <LoginPageWrapper>
      <form>
        <h2>Kayıt Ol</h2>
        <TextField
          value={username}
          name={"email"}
          placeholder={"Kullanıcı Adı"}
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
        <TextField
          value={password_1}
          name={"password"}
          type={"password"}
          placeholder={"Şifre"}
          onChange={(e) => setPassword_1(e.target.value)}
        ></TextField>
        <TextField
          value={password_2}
          name={"password"}
          type={"password"}
          placeholder={"Şifre Tekrar"}
          onChange={(e) => setPassword_2(e.target.value)}
        ></TextField>
        <Button variant={"contained"} color={"primary"} onClick={(e) => handleSubmit(e)}>
          Kayıt Ol
        </Button>
        <p>
          Zaten hesabınız var mı? <mark onClick={() => history.push("/login")}>Giriş Yap</mark>
        </p>
      </form>
    </LoginPageWrapper>
  );
}

export default SignupPage;
