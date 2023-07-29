import styled from "styled-components";

export const SummaryStyled = styled.table`
 width: 50%;
 border-collapse: collapse;
 background-color: #f2f2f2;
 border: 1px solid #dddddd;
 padding: 10px;
`;

export const SummaryCellStyled = styled.td`
 font-weight: 700;
 padding: 10px;
 text-align: center;
 border: 1px solid #ddd;
`;

export const SummaryFoterCellStyled = styled(SummaryCellStyled)`
 background-color: #dddddd;
`;
export const SummaryHeaderStyled = styled.thead`
 background-color: #dddddd;
`;
