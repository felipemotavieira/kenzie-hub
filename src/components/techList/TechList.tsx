import { useContext, useEffect } from "react";
import { TechContext } from "../../context/TechContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Li, P, Ul, PStat, Button, Div } from "./styles";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const TechList = () => {
  const navigate = useNavigate();
  const { techs, setTechs, onDeleteTech } = useContext(TechContext);

  useEffect(() => {
    let token = localStorage.getItem("@TOKEN");
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTechs(response.data.techs);
      })
      .catch((error) => {
        navigate("/");
      });
  }, [techs]);

  async function deleteTech(id: string) {
    let verify = await onDeleteTech(id);

    verify
      ? toast.success("Tecnologia excluída com sucesso")
      : toast.error("Não foi possível excluir essa tecnologia");
  }

  return (
    <>
      <Ul>
        {techs.length ? (
          techs.map((elem, index) => (
            <Li key={index}>
              <P>{elem.title} </P>
              <Div>
                <PStat>{elem.status}</PStat>
                <Button onClick={() => deleteTech(elem.id)}>x</Button>
              </Div>
            </Li>
          ))
        ) : (
          <P>Adicione tecnologias</P>
        )}
      </Ul>
    </>
  );
};

export default TechList;
