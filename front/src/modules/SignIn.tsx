import React from "react";
import { TextField, Typography, Button, Grid, Link } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

interface SignInProps {
  setAuthToken: (state: string | null) => void;
}

const SignIn: React.FC<SignInProps> = ({ setAuthToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  return (
    <>
      <Typography component="h1" variant="h5">
        로그인
      </Typography>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          signIn({ email, password })
            .then((res) => setAuthToken(res))
            .catch((err) => console.log(err));
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
            (!email.includes("@") || !email.includes(".")) &&
            "이메일에는 @와 .이 포함되어야 해요."}
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

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!email.includes("@") || password.length < 8}
        >
          로그인
        </Button>
      </form>
    </>
  );
};

export default SignIn;
