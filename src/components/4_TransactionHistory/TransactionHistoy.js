import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default function TransactionHistory({ props }) {
  return (
    <table class="transaction-history">
      <TableHead />
      {props.map(prop => (
        <TableBody
          key={prop.id}
          type={prop.type}
          amount={prop.amount}
          currency={prop.currency}
        />
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  key: PropTypes.number.isRequired,
};
