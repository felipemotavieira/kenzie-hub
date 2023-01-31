import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../context/UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Div,
  Form,
  H2,
  Header,
  Input,
  Label,
  NavButton,
  Span,
} from "./styles";

interface ILoginData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { onSubmitLogin } = useContext(UserContext);

  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(formSchema),
  });

  const handleSuccess = () => {
    toast.success("Login realizado com sucesso!");
    navigate("/dashboard");
  };

  async function submitLogin(data: ILoginData) {
    let verify = await onSubmitLogin(data);

    verify ? handleSuccess() : toast.error("E-mail ou senha inválidos!");
  }

  return (
    <Div>
      <Header>
        <H2>Kenzie Hub</H2>
      </Header>
      <Form onSubmit={handleSubmit(submitLogin)}>
        <Label htmlFor="email">E-mail</Label>
        <Input placeholder="Email" id="email" {...register("email")}></Input>
        <Span>{errors.email?.message}</Span>
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          placeholder="Senha"
          id="password"
          {...register("password")}
        ></Input>
        <Span>{errors.password?.message}</Span>
        <Button type="submit">Login</Button>
        <NavLink to="/register">
          <NavButton>Cadastrar</NavButton>
        </NavLink>
      </Form>
    </Div>
  );
};

export default Login;
