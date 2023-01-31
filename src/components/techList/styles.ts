import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #212529;
  border-radius: 4px;
  padding: 3vh;
  gap: 3vh;
  margin: 0 3vw;
  @media (min-width: 768px) {
    margin: 0vw 5vw;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 10px;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 90%;
  background-color: #121214;
  padding: 3vw;
  :hover Button {
    display: flex;
    cursor: pointer;
    transition: 1s ease-in-out;
  }
`;

export const P = styled.p`
  color: #f8f9fa;
`;

export const PStat = styled.p`
  color: #868e96;
`;

export const Button = styled.button`
  display: none;
  border: none;
  color: #ffffff;
  background: #e83f5b;
  border-radius: 5px;
`;

// export const buttonAnimation = keyframes`

// `;
