import styled from "styled-components";

export const Div = styled.div`
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const Header = styled.header`
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3vh;
`;

export const H1 = styled.h1`
  color: #ff577f;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 14.3916px;
  line-height: 22px;
  color: #f8f9fa;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 9.59437px;
  line-height: 18px;
  color: #868e96;
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
    width: 40%;
  }
  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-left: 10%;
  height: 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 9.73988px;
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

export const SpanError = styled.span`
  color: white;
  font-size: 10px;
`;

export const Select = styled.select`
  padding: 3px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #343b41;
  border: 0.973988px solid #343b41;
  border-radius: 3.19812px;
  color: #868e96;
  width: 88%;
`;

export const Option = styled.option`
  color: #868e96;
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
    width: 35vw;
  }
  @media (min-width: 1024px) {
    width: 18vw;
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
    width: 35vw;
  }
  @media (min-width: 1024px) {
    width: 18vw;
  }
`;
