import styled from "styled-components";

export const ModalDivSup = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  background-color: #121214;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 28%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #343b41;
  border-radius: 10px;
`;

export const H5 = styled.h5`
  color: #f8f9fa;
  font-size: 3vh;
  padding: 3vw;
  @media (min-width: 768px) {
    padding: 1.2vw;
  }
`;

export const DivAddTech = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vh;
  @media (min-width: 768px) {
    padding: 3vh 14vw;
  }
  @media (min-width: 1024px) {
    padding: 3vh 17vw;
  }
`;

export const H4 = styled.h4`
  color: #f8f9fa;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5vw;
  gap: 10px;
  @media (min-width: 768px) {
    padding: 2vw;
  }
`;

export const ButtonOpen = styled.button`
  border: none;
  background: #212529;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px;
`;

export const ButtonClose = styled.button`
  border: none;
  background: #343b41;
  border-radius: 4px;
  color: #ffffff;
  padding: 3vw;
  border-radius: 10px;
  @media (min-width: 768px) {
    padding: 1vw;
  }
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-left: 10%;
  margin-bottom: 1%;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
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
  @media (min-width: 768px) {
    width: 76%;
  }
  @media (min-width: 1023px) {
    width: 79%;
  }
`;

export const Button = styled.button`
  background: #59323f;
  border: 1.2182px solid #59323f;
  border-radius: 4px;
  color: #ffffff;
  padding: 10px;
  width: 71vw;
  margin-top: 1vh;
  &: hover {
    background: #ff577f;
  }

  @media (min-width: 768px) {
    margin-top: 3vh;
    width: 87%;
  }
`;
