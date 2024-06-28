import React, {
  Dispatch,
  PropsWithChildren,
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

import axios from "@/utils/axios";
import { useNavigate } from "react-router-dom";

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  role: string;
  created_at: string;
  updated_at?: string;
  deleted_at?: string;
}

export type UserAction =
  | { type: "LOGIN" }
  | { type: "LOGOUT" }
  | { type: "GET_ME"; payload: UserInfo };

const AuthContext = createContext<UserInfo | null>(null);
const AuthDispatchContext = createContext<Dispatch<UserAction> | null>(null);

const authReducer: Reducer<UserInfo | null, UserAction> = (auth, action) => {
  switch (action.type) {
    case "LOGIN":
      return auth;
    case "LOGOUT":
      return null;
    case "GET_ME":
      return action.payload;
    default:
      return auth;
  }
};

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, null);

  const userToken = localStorage.getItem("user_token");

  useEffect(() => {
    const fetchUser = async () => {
      if (userToken) {
        try {
          const { data } = await axios({
            method: "POST",
            url: "/auth/me",
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });

          dispatch({ type: "GET_ME", payload: data.user });
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
    };
    fetchUser();
  }, [userToken]);

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export function useAuth(): UserInfo {
  return useContext(AuthContext)!;
}

export function useAuthDispatch(): Dispatch<UserAction> {
  return useContext(AuthDispatchContext)!;
}

export const AuthAdmin: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (auth?.role !== "admin" && auth?.role !== "superadmin") {
      navigate("/");
    }
  }, [auth, navigate]);

  if (auth?.role === "admin" || auth?.role === "superadmin") {
    return <>{children}</>;
  }

  return null; // Return null or some loading/error component
};
