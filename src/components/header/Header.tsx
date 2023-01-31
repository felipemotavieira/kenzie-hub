import { useNavigate } from "react-router-dom";
import { Button, H1, HeaderS } from "./styles";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <HeaderS>
      <H1>Kenzie Hub</H1>
      <Button onClick={() => logout()}>Sair</Button>
    </HeaderS>
  );
};

export default Header;
