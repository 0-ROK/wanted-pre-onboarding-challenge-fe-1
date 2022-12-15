import { Button, TextField, Typography, Grid } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

interface SignUpProps {
  setAuthToken: (state: string | null) => void;
}

const SignUp: React.FC<SignUpProps> = ({ setAuthToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const { requestSignUp } = useAuth();

  return (
    <>
      <Typography component="h1" variant="h5">
        회원가입
      </Typography>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          (async () => {
            try {
              await requestSignUp({ email, password });
              setAuthToken(localStorage.getItem("access_token"));
            } catch (error) {
              console.log(error);
            }
          })();
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="이메일"
          name="email"
          autoComplete="user-email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          autoFocus
        />

        <div style={{ fontSize: "15px", color: "red", width: "100%" }}>
          {!!email.length &&
            !email.includes("@") &&
            "이메일에는 '@'가 포함되어야 해요."}
        </div>

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <div style={{ fontSize: "15px", color: "red" }}>
          {!!password.length &&
            password.length < 8 &&
            "비밀번호는 8자리 이상이어야 해요."}
        </div>

        <TextField
          margin="normal"
          required
          fullWidth
          name="password-check"
          label="비밀번호"
          type="password-check"
          id="password-check"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          autoComplete="current-password"
        />

        <div style={{ fontSize: "15px", color: "red" }}>
          {!!passwordCheck.length &&
            password !== passwordCheck &&
            "비밀번호가 일치하지 않아요."}
        </div>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={
            !email.includes("@") ||
            password.length < 8 ||
            password !== passwordCheck
          }
        >
          회원가입
        </Button>
      </form>
    </>
  );
};

export default SignUp;
