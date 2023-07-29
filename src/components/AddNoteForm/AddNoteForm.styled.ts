import styled from "styled-components";

export const NoteHeaderStyled = styled.h1`
 text-align: center;
 margin-bottom: 20px;
`;

export const FormStyled = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 80%;
 margin: 0 auto;
 padding: 2rem;
 border: 1px solid #ccc;
 border-radius: 5px;
 background-color: #fff;
 box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
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

export const FormSelectStyled = styled.select`
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

export const FormButtonStyled = styled.button`
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
