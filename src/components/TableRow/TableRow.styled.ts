import styled from "styled-components";

export const TableRowStyled = styled.tr``;
export const TableCellStyled = styled.td`
 word-break: break-word;
 max-width: 300px;
 overflow: hidden;
 text-overflow: ellipsis;

 padding: 12px;
 text-align: left;
 border-bottom: 1px solid #ddd;
`;
export const TableCellActionsStyled = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 gap: 8px;
`;
export const TableCellActionsButtonStyled = styled.button`
 background-color: transparent;
 border: none;
 cursor: pointer;
 outline: none;
 padding: 0;
 margin: 0;

 display: flex;
 justify-content: center;
 align-items: center;
`;
