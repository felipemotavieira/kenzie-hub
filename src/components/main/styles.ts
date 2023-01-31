import styled from "styled-components";

export const MainS = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #121214;
  color: #f8f9fa;
  padding-bottom: 20px;
  padding: 3vh;
  gap: 2vh;
  border-top: 2px solid #212529;
  border-bottom: 2px solid #212529;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const H2 = styled.h2`
  color: #f8f9fa;
  @media (min-width: 768px) {
    margin: 20px;
  }
`;

export const Span = styled.span`
  color: #868e96;
  @media (min-width: 768px) {
    margin: 20px;
  }
`;

export const Div = styled.div`
  height: 70vh;
  background: #121214;
`;
