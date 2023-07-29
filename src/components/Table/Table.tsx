import { FC, useState } from "react";

import {
 TableStyled,
 TableHeaderStyled,
 NoNotesHeaderStyled,
} from "./Table.styled";

import { TableRow } from "../TableRow";

import { Note, NotesState } from "../../types/notes";
import { Modal } from "../Modal";

const headers = [
 "Name",
 "Content",
 "Creation Time",
 "Dates Mentioned",
 "Category",
 "Actions",
];

export const Table: FC<NotesState> = ({ notes }) => {
 const [isOpen, setIsOpen] = useState(false);
 const [note, setNote] = useState({} as Note);
 const setOpen = (id: number) => {
  setIsOpen(true);
  if (id) {
   const note = notes.find((note) => note.id === id);
   if (note) setNote(note);
  }
 };

 return (
  <>
   {notes.length > 0 ? (
    <>
     <TableStyled>
      <thead>
       <tr>
        {headers.map((header) => (
         <TableHeaderStyled key={header}>{header}</TableHeaderStyled>
        ))}
       </tr>
      </thead>
      <tbody>
       {notes.map((note) => (
        <TableRow
         key={note.id}
         id={note.id}
         name={note.name}
         content={note.content}
         creationTime={note.creationTime}
         datesMentioned={note.datesMentioned}
         category={note.category}
         archived={note.archived}
         setOpen={setOpen}
        />
       ))}
      </tbody>
     </TableStyled>
     <Modal
      isOpen={isOpen}
      note={note}
      setOpen={() => {
       setIsOpen(!isOpen);
      }}
     />
    </>
   ) : (
    <NoNotesHeaderStyled>There is nothing here</NoNotesHeaderStyled>
   )}
  </>
 );
};
