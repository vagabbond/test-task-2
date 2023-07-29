import { FC } from "react";

import { useFormik } from "formik";

import { useAppDispatch } from "../../redux/operations";
import { addNote } from "../../redux/notes/notesSlice";

import { FormValues } from "../../types/form";

import {
 FormStyled,
 FormInputStyled,
 FormTextAreaStyled,
 FormSelectStyled,
 FormButtonStyled,
 NoteHeaderStyled,
} from "./AddNoteForm.styled";
const initialValues: FormValues = {
 name: "",
 content: "",
 datesMentioned: "",
 category: "",
};

export const AddNoteForm: FC = () => {
 const dispatch = useAppDispatch();

 const formik = useFormik({
  initialValues,
  onSubmit: (values, actions) => {
   const creationTime = new Date().toLocaleString();
   dispatch(
    addNote({
     name: values.name,
     content: values.content,
     creationTime,
     datesMentioned: values.datesMentioned,
     category: values.category,
     archived: false,
    })
   );
   actions.resetForm();
  },
 });
 return (
  <FormStyled onSubmit={formik.handleSubmit}>
   <NoteHeaderStyled>Add note</NoteHeaderStyled>
   <FormInputStyled
    id="name"
    name="name"
    type="text"
    placeholder="Name"
    onChange={formik.handleChange}
    value={formik.values.name}
   />
   <FormTextAreaStyled
    id="content"
    name="content"
    placeholder="Content"
    onChange={formik.handleChange}
    value={formik.values.content}
   />
   <FormInputStyled
    id="datesMentioned"
    name="datesMentioned"
    type="text"
    placeholder="Dates Mentioned"
    onChange={formik.handleChange}
    value={formik.values.datesMentioned}
   />
   <FormSelectStyled
    id="category"
    name="category"
    onChange={formik.handleChange}
    value={formik.values.category}
   >
    <option value="Task">Task</option>
    <option value="Random Thought">Random Thought</option>
    <option value="Idea">Idea</option>
   </FormSelectStyled>
   <FormButtonStyled type="submit">Add Note</FormButtonStyled>
  </FormStyled>
 );
};
