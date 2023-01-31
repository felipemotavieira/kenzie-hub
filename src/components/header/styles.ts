import styled from "styled-components";

export const HeaderS = styled.header`
  background-color: #121214;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2vh;
`;

export const H1 = styled.h1`
  color: #ff577f;
`;

export const Button = styled.button`
  border: none;
  background: #212529;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px;
  &: hover {
    cursor: pointer;
  }
`;
