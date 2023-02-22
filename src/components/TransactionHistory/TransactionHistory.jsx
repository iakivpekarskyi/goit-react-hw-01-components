import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  HeadTableData,
  Body,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <TableHead>
        <HeadTableData>Type</HeadTableData>
        <HeadTableData>Amount</HeadTableData>
        <HeadTableData>Currency</HeadTableData>
      </TableHead>
      <Body>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};
