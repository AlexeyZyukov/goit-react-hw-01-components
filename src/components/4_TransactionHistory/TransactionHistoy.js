import PropTypes from 'prop-types';

import styles from './transaction.module.css';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default function TransactionHistory({ props }) {
  return props.length > 0 && createTable(props);
}

function createTable(props) {
  return (
    <table class={styles.transactionHistory}>
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
