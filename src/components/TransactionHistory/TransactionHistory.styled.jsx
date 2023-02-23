import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  max-width: 768px;
  text-align: center;
  border-radius: 8px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: #6b9888;
  color: #ffffff;
`;

export const HeadTableData = styled.th`
  padding: 10px 0;
`;

export const TableBody = styled.tbody`
  font-size: 16px;
`;

export const TableRow = styled.tr`
  background-color: #ffffff;
`;

export const TableData = styled.td`
  padding: 10px 0;
  outline: 1px solid #6b9888;
`;
