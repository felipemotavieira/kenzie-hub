import styled from "styled-components";

export const Div = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50vh;
`;

export const Header = styled.header`
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3vh;
`;

export const H2 = styled.h2`
  color: #ff577f;
`;

export const Form = styled.form`
  width: 93%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #212529;
  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: 3.19812px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 20px;

  @media (min-width: 768px) {
    width: 35%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-left: 10%;
  width: 35px;
  height: 0px;
  font-weight: 400;
  font-size: 10px;
  line-height: 0px;
  color: #f8f9fa;
`;

export const Input = styled.input`
  width: 80%;
  background: #343b41;
  border: 0.973988px solid #343b41;
  border-radius: 3.19812px;
  color: #868e96;
  padding: 10px;
`;

export const Span = styled.span`
  color: white;
  font-size: 10px;
`;

export const Button = styled.button`
  background: #59323f;
  border: 1.2182px solid #59323f;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px;
  width: 80vw;
  &: hover {
    background: #ff577f;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 31vw;
  }
  @media (min-width: 1024px) {
    width: 22vw;
  }
`;

export const NavButton = styled.button`
  background: #868e96;
  color: #f8f9fa;
  border: 1.2182px solid #59323f;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px;
  margin-bottom: 5%;
  width: 80vw;
  &: hover {
    filter: opacity(0.6);
    color: #f8f9fa;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 31vw;
  }
  @media (min-width: 1024px) {
    width: 22vw;
  }
`;
