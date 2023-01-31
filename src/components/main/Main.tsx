import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Modal from "../modal/Modal";
import TechList from "../techList/TechList";
import { H2, MainS, Span } from "./styles";

const Main = () => {
  const { user } = useContext(UserContext);
  const { name, course_module } = user;

  return (
    <>
      <MainS>
        <H2>Olá, {name} </H2>
        <Span>{course_module} </Span>
      </MainS>
      <Modal />
      <TechList />
    </>
  );
};

export default Main;
