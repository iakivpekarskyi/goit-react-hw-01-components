import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  HeadTableData,
  TableBody,
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
      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
      </TableBody>
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
