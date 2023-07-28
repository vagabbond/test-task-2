import { FC } from "react";
import { Table } from "./components/Table";
import { Wrapper, Title } from "./App.styled";
import { useAppSelector } from "./redux/operations";
export const App: FC = () => {
 const { notes } = useAppSelector((state) => state.notes);
 const unarchivatedNotes = notes.filter((note) => note.archived === false);
 const archivatedNotes = notes.filter((note) => note.archived === true);
 return (
  <Wrapper>
   <Title>Active notes</Title>
   <Table notes={unarchivatedNotes} />
   <Title>Archived notes</Title>
   <Table notes={archivatedNotes} />
  </Wrapper>
 );
};
