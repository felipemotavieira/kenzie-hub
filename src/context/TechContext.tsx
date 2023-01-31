import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import api from "../services/api";

interface ITechProviderProps {
  children: ReactNode;
}

interface ITechs {
  title: string;
  status: string;
  id: string;
}

interface ITechProviderData {
  techs: ITechs[];
  // getTechs: () => void;
  setTechs: Dispatch<SetStateAction<ITechs[]>>;
  onCreateTech: (data: ITechs) => Promise<boolean>;
  onDeleteTech: (data: string) => Promise<boolean>;
}

export const TechContext = createContext<ITechProviderData>(
  {} as ITechProviderData
);

function TechProvider({ children }: ITechProviderProps) {
  // const navigate = useNavigate();

  const [techs, setTechs] = useState<ITechs[]>([]);

  const onCreateTech = async (data: ITechs) => {
    let token = localStorage.getItem("@TOKEN");
    return api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        return true;
      })
      .catch(() => false);
  };

  const onDeleteTech = async (data: string) => {
    let token = localStorage.getItem("@TOKEN");
    return api
      .delete(`users/techs/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        return true;
      })
      .catch(() => false);
  };

  return (
    <TechContext.Provider
      value={{ onCreateTech, onDeleteTech, techs, setTechs }}
    >
      {children}
    </TechContext.Provider>
  );
}

export default TechProvider;
