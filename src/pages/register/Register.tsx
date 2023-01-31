import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  Label,
  Input,
  Select,
  Option,
  Button,
  Div,
  Header,
  H2,
  Span,
  H1,
  NavButton,
  SpanError,
} from "./styles";

interface ISubmitData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

const Register = () => {
  const navigate = useNavigate();
  const { onSubmitRegister } = useContext(UserContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome necessário"),
    email: yup.string().required("E-mail necessário").email("E-mail inválido"),
    password: yup
      .string()
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Sua senha deve conter, ao menos, 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caracter especial e 8 dígitos"
      )
      .required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem ser idênticas")
      .required("Obrigatório confirmar sua senha"),
    bio: yup.string().required("Bio necessária"),
    course_module: yup.string().required("Selecionar opção"),
    contact: yup.string().required("Informações para contato necessárias"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitData>({
    resolver: yupResolver(formSchema),
  });

  async function submitRegister(data: ISubmitData) {
    let verify = await onSubmitRegister(data);

    verify ? navigate("/") : console.log("submit error");
  }

  return (
    <Div>
      <Header>
        <H1>Kenzie Hub</H1>
      </Header>
      <Form onSubmit={handleSubmit(submitRegister)}>
        <H2>Crie sua conta</H2>
        <Span>Rápido e grátis, vamos nessa</Span>
        <Label htmlFor="name">Nome</Label>
        <Input placeholder="Nome" id="name" {...register("name")}></Input>
        <SpanError>{errors.name?.message}</SpanError>

        <Label htmlFor="email">E-mail</Label>
        <Input placeholder="Email" id="email" {...register("email")}></Input>
        <SpanError>{errors.email?.message}</SpanError>

        <Label htmlFor="password">Senha</Label>
        <Input
          placeholder="Senha"
          type="password"
          id="password"
          {...register("password")}
        ></Input>
        <SpanError>{errors.password?.message}</SpanError>

        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
        <Input
          placeholder="Confirmar senha"
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        ></Input>
        <SpanError>{errors.confirmPassword?.message}</SpanError>

        <Label htmlFor="bio">Bio</Label>
        <Input placeholder="Bio" id="bio" {...register("bio")}></Input>
        <SpanError>{errors.bio?.message}</SpanError>

        <Label htmlFor="contact">Contato</Label>
        <Input
          placeholder="Contato"
          id="contact"
          {...register("contact")}
        ></Input>
        <SpanError>{errors.contact?.message}</SpanError>

        <Label htmlFor="course_module">Módulo</Label>
        <Select id="course_module" {...register("course_module")}>
          <Option>Primeiro módulo (Introdução ao Frontend)</Option>
          <Option>Segundo módulo (Frontend Avançado)</Option>
          <Option>Terceiro módulo (Introdução ao Backend)</Option>
          <Option>Quarto módulo (Backend Avançado)</Option>
        </Select>
        <SpanError>{errors.course_module?.message}</SpanError>

        <Button type="submit">Cadastrar</Button>
        <NavLink to="/">
          <NavButton>Login</NavButton>
        </NavLink>
      </Form>
    </Div>
  );
};

export default Register;
