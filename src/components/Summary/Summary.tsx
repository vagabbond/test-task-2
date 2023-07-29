import { FC, useEffect, useState } from "react";

import {
 SummaryStyled,
 SummaryHeaderStyled,
 SummaryCellStyled,
 SummaryFoterCellStyled,
} from "./Summary.styled";

import { useAppSelector } from "../../redux/operations";

interface SummaryData {
 activeNotesByCategory: Record<string, number>;
 archivedNotesByCategory: Record<string, number>;
}

export const Summary: FC = () => {
 const { notes } = useAppSelector((state) => state.notes);
 const [data, setData] = useState<SummaryData>({
  activeNotesByCategory: {},
  archivedNotesByCategory: {},
 });

 useEffect(() => {
  const newData: SummaryData = {
   activeNotesByCategory: {},
   archivedNotesByCategory: {},
  };

  notes.forEach((note) => {
   if (!newData.activeNotesByCategory[note.category]) {
    newData.activeNotesByCategory[note.category] = 0;
   }
   if (!newData.archivedNotesByCategory[note.category]) {
    newData.archivedNotesByCategory[note.category] = 0;
   }

   if (!note.archived) {
    newData.activeNotesByCategory[note.category]++;
   } else {
    newData.archivedNotesByCategory[note.category]++;
   }
  });

  setData(newData);
 }, [notes]);
 return (
  <SummaryStyled>
   <SummaryHeaderStyled>
    <tr>
     <SummaryCellStyled>Category</SummaryCellStyled>
     <SummaryCellStyled>Active</SummaryCellStyled>
     <SummaryCellStyled>Archived</SummaryCellStyled>
    </tr>
   </SummaryHeaderStyled>
   <tbody>
    {Object.entries(data.activeNotesByCategory).map(
     ([category, activeCount]) => (
      <tr key={category}>
       <SummaryCellStyled>{category}</SummaryCellStyled>
       <SummaryCellStyled>{activeCount}</SummaryCellStyled>
       <SummaryCellStyled>
        {data.archivedNotesByCategory[category]}
       </SummaryCellStyled>
      </tr>
     )
    )}
   </tbody>
   <tfoot>
    {Object.entries(data.activeNotesByCategory).length > 0 && (
     <tr>
      <SummaryFoterCellStyled>Total</SummaryFoterCellStyled>
      <SummaryCellStyled>
       {Object.values(data.activeNotesByCategory).reduce(
        (acc, count) => acc + count,
        0
       )}
      </SummaryCellStyled>
      <SummaryCellStyled>
       {Object.values(data.archivedNotesByCategory).reduce(
        (acc, count) => acc + count,
        0
       )}
      </SummaryCellStyled>
     </tr>
    )}
   </tfoot>
  </SummaryStyled>
 );
};
