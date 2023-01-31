import { useState, createContext, useEffect, ReactNode } from "react";
import api from "../services/api";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: Array<Object>;
  works: Array<Object>;
  avatar_url: string;
}

interface IUserId {
  id: string;
}

interface ISubmitData {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IUserProviderData {
  user: IUser;
  userId: IUserId;
  onSubmitRegister: (data: ISubmitData) => Promise<boolean>;
  onSubmitLogin: (data: ILoginData) => Promise<boolean>;
}

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

function UserProvider({ children }: IUserProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [userId, setUserId] = useState<IUserId>({} as IUserId);

  useEffect(() => {
    let token = localStorage.getItem("@TOKEN");
    token
      ? api
          .get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
      : localStorage.clear();
  }, []);

  const onSubmitRegister = async (data: ISubmitData | boolean) => {
    const response = await api
      .post("/users", data)
      .then(() => true)
      .catch(() => false);

    return response;
  };

  const onSubmitLogin = async (data: ILoginData | boolean) => {
    const response = await api
      .post("/sessions", data)
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
        setUserId(response.data.user.id);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
    console.log(response);
    return response;
  };

  return (
    <UserContext.Provider
      value={{ user, userId, onSubmitRegister, onSubmitLogin }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
