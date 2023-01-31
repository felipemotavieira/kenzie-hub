import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Select, Option, SpanError } from "../../pages/register/styles";
import * as yup from "yup";
import {
  ModalDiv,
  DivAddTech,
  H4,
  Form,
  Label,
  ModalHeader,
  ButtonOpen,
  ButtonClose,
  H5,
  Input,
  Button,
  ModalDivSup,
} from "./styles";
import { useContext } from "react";
import { TechContext } from "../../context/TechContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ISubmitTechData {
  title: string;
  status: string;
  id: string;
}

const Modal = () => {
  const [modal, setModal] = useState(false);
  const { onCreateTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Tecnologia obrigatória"),
    status: yup.string().required("Status necessário"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitTechData>({ resolver: yupResolver(formSchema) });

  async function submitTech(data: ISubmitTechData) {
    let verify = await onCreateTech(data);
    if (verify) {
      toast.success("Tecnologia criada com sucesso");
      setModal(!modal);
    } else {
      toast.error("Não foi possível criar essa tecnologia");
    }
  }

  return (
    <>
      <DivAddTech>
        <H4>Tecnologias</H4>
        <ButtonOpen onClick={() => setModal(!modal)}>+</ButtonOpen>
      </DivAddTech>
      {modal && (
        <ModalDivSup>
          <ModalDiv>
            <ModalHeader>
              <H5>Cadastrar tecnologia</H5>
              <ButtonClose onClick={() => setModal(!modal)}>X</ButtonClose>
            </ModalHeader>

            <Form onSubmit={handleSubmit(submitTech)}>
              <Label htmlFor="title">Tecnologia</Label>
              <Input placeholder="Tecnologia" {...register("title")}></Input>
              <SpanError>{errors.title?.message}</SpanError>

              <Label htmlFor="status">Status</Label>
              <Select {...register("status")}>
                <Option>Iniciante</Option>
                <Option>Intermediário</Option>
                <Option>Avançado</Option>
              </Select>
              <Button type="submit">Cadastrar tecnologia</Button>
            </Form>
          </ModalDiv>
        </ModalDivSup>
      )}
    </>
  );
};

export default Modal;
