import { useNavigate } from "react-router-dom";
import axios from "axios";
import { string } from "prop-types";

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

  const signIn = async (payload: SignInPayload): Promise<string> => {
    try {
      const response = await axios.post("/users/login", payload);

      if (response.status !== 200) throw Error(`${response.status}`);

      localStorage.setItem("token", response.data.token);

      return response.data.token;
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (payload: SignUpPayload): Promise<string> => {
    try {
      const response = await axios.post("/users/create", payload);

      if (response.status !== 200) throw Error(`${response.status}`);

      localStorage.setItem("token", response.data.token);

      return response.data.token;
    } catch (error) {
      throw error;
    }
  };

  return { signUp, signIn };
};
