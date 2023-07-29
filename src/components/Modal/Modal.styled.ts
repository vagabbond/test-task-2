import styled from "styled-components";
import ReactModal from "react-modal";

export const ModalStyled = styled(ReactModal)`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 400px;
 padding: 20px;
 background-color: #fff;
 border: 0.8px solid #ccc;
 border-radius: 10px;
`;

export const ModalTitle = styled.h2`
 font-size: 1.5rem;
 margin-bottom: 1rem;
 text-align: center;
`;

export const CloseButton = styled.button`
 display: flex;
 justify-content: center;
 align-items: center;
 position: absolute;
 top: 10px;
 right: 10px;
 width: 30px;
 height: 30px;
 border: 0.8px solid #ccc;
 border-radius: 50%;
 background-color: #fff;
 cursor: pointer;
 &:hover {
  background-color: #ccc;
 }
`;

export const FormStyled = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 80%;
 margin: 0 auto;
`;

export const FormInputStyled = styled.input`
 width: 100%;
 font: inherit;
 padding: 0.5rem;
 border: 1px solid #ccc;
 margin-bottom: 0.5rem;
 &:focus {
  outline: none;
  border-color: #4f005f;
 }
`;

export const FormTextAreaStyled = styled.textarea`
 max-width: 100%;
 min-width: 100%;
 max-height: 300px;
 min-height: 50px;
 font: inherit;
 padding: 0.5rem;
 border: 1px solid #ccc;
 margin-bottom: 0.5rem;
 &:focus {
  outline: none;
  border-color: #4f005f;
 }
`;
export const SelectStyled = styled.select`
 width: 100%;
 font: inherit;
 padding: 0.5rem;
 border: 1px solid #ccc;
 margin-bottom: 0.5rem;
 &:focus {
  outline: none;
  border-color: #4f005f;
 }
`;
export const SubmitButtonStyled = styled.button`
 font: inherit;
 padding: 0.5rem 1.5rem;
 border: 1px solid #4f005f;
 color: #4f005f;
 background-color: transparent;
 cursor: pointer;
 margin-top: 1rem;
 &:hover,
 &:active {
  background-color: #4f005f;
  color: #fff;
 }
`;
