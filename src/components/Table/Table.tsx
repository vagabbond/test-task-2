import { FC } from "react";

import {
 TableStyled,
 TableHeaderStyled,
 NoNotesHeaderStyled,
} from "./Table.styled";

import { TableRow } from "../TableRow";

import { NotesState } from "../../types/notes";

const headers = [
 "Name",
 "Content",
 "Creation Time",
 "Dates Mentioned",
 "Category",
 "Actions",
];

export const Table: FC<NotesState> = ({ notes }) => {
 return (
  <>
   {notes.length > 0 ? (
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
       />
      ))}
     </tbody>
    </TableStyled>
   ) : (
    <NoNotesHeaderStyled>There is nothing here</NoNotesHeaderStyled>
   )}
  </>
 );
};
