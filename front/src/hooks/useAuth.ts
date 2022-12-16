import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useAuth = () => {
  const navigate = useNavigate();

  interface SignUpPayload {
    email: string;
    password: string;
  }

  interface SignInPayload {
    email: string;
    password: string;
  }

  const requestSignIn = async (payload: SignInPayload) => {
    try {
      const { data } = await axios.post("/auth/signin", payload);

      localStorage.setItem("access_token", data.access_token);

      navigate("/todo");
    } catch (error) {
      throw error;
    }
  };

  const requestSignUp = async (payload: SignUpPayload) => {
    try {
      const { data } = await axios.post("/auth/signup", payload);
      localStorage.setItem("access_token", data.access_token);

      navigate("/todo");
    } catch (error) {
      throw error;
    }
  };

  return { requestSignUp, requestSignIn };
};
