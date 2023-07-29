import { FC, useEffect } from "react";

import { useFormik } from "formik";
import {
 ModalStyled,
 CloseButton,
 FormInputStyled,
 FormStyled,
 FormTextAreaStyled,
 SubmitButtonStyled,
 SelectStyled,
 ModalTitle,
} from "./Modal.styled";

import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "../../redux/operations";

import { editNote } from "../../redux/notes/notesSlice";
import { Note } from "../../types/notes";

type ModalProps = {
 isOpen: boolean;
 note: Note;
 setOpen: () => void;
};

export const Modal: FC<ModalProps> = ({ isOpen, note, setOpen }) => {
 const dispatch = useAppDispatch();
 const initialValues = {
  name: "",
  content: "",
  category: "",
  datesMentioned: "",
 };
 const { handleChange, handleSubmit, values, resetForm, setValues } = useFormik(
  {
   initialValues,
   onSubmit: (values) => {
    dispatch(
     editNote({
      id: note.id,
      name: values.name,
      content: values.content,
      category: values.category,
      datesMentioned: values.datesMentioned,
     })
    );
    setOpen();
   },
  }
 );

 useEffect(() => {
  if (note) {
   setValues({
    name: note.name,
    content: note.content,
    category: note.category,
    datesMentioned: note.datesMentioned,
   });
  }
 }, [note, setValues]);

 return (
  <ModalStyled isOpen={isOpen} ariaHideApp={false}>
   <CloseButton
    type="button"
    onClick={() => {
     setOpen();
     resetForm();
    }}
   >
    <AiOutlineClose />
   </CloseButton>
   <ModalTitle>Edit Note</ModalTitle>
   <FormStyled onSubmit={handleSubmit}>
    <FormInputStyled
     id="name"
     name="name"
     type="text"
     onChange={handleChange}
     value={values.name}
    />
    <FormTextAreaStyled
     id="content"
     name="content"
     onChange={handleChange}
     value={values.content}
    />
    <SelectStyled
     id="category"
     name="category"
     onChange={handleChange}
     value={values.category}
    >
     <option value="Task">Task</option>
     <option value="Random Thought">Random Thought</option>
     <option value="Idea">Idea</option>
    </SelectStyled>
    <FormInputStyled
     id="datesMentioned"
     name="datesMentioned"
     type="text"
     onChange={handleChange}
     value={values.datesMentioned}
    />
    <SubmitButtonStyled type="submit">Submit</SubmitButtonStyled>
   </FormStyled>
  </ModalStyled>
 );
};
