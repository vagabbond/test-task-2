import { FC } from "react";

import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import {
 TableRowStyled,
 TableCellStyled,
 TableCellActionsStyled,
 TableCellActionsButtonStyled,
} from "./TableRow.styled";

import { Note } from "../../types/notes";

import { useAppDispatch } from "../../redux/operations";

import {
 archiveNote,
 removeNote,
 unArchiveNote,
} from "../../redux/notes/notesSlice";

type Func = {
 setOpen: (id: number) => void;
};

type Props = Note & Func;

export const TableRow: FC<Props> = ({
 id,
 name,
 content,
 creationTime,
 datesMentioned,
 category,
 archived,
 setOpen,
}) => {
 const dispatch = useAppDispatch();

 return (
  <>
   <TableRowStyled key={id}>
    <TableCellStyled>{name}</TableCellStyled>
    <TableCellStyled>{content}</TableCellStyled>
    <TableCellStyled>{creationTime}</TableCellStyled>
    <TableCellStyled>{datesMentioned}</TableCellStyled>
    <TableCellStyled>{category}</TableCellStyled>
    <TableCellStyled>
     <TableCellActionsStyled>
      {archived ? (
       <TableCellActionsButtonStyled
        type="button"
        onClick={() => {
         dispatch(unArchiveNote(id));
        }}
       >
        <BiArchiveOut size="30" />
       </TableCellActionsButtonStyled>
      ) : (
       <>
        <TableCellActionsButtonStyled
         type="button"
         onClick={() => {
          dispatch(archiveNote(id));
         }}
        >
         <BiArchiveIn size="30" />
        </TableCellActionsButtonStyled>
        <TableCellActionsButtonStyled
         type="button"
         onClick={() => {
          setOpen(id);
         }}
        >
         <AiFillEdit size="30" />
        </TableCellActionsButtonStyled>
       </>
      )}
      <TableCellActionsButtonStyled
       type="button"
       onClick={() => {
        dispatch(removeNote(id));
       }}
      >
       <AiFillDelete size="30" />
      </TableCellActionsButtonStyled>
     </TableCellActionsStyled>
    </TableCellStyled>
   </TableRowStyled>
  </>
 );
};
