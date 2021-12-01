import PropTypes from 'prop-types';
import styles from './transaction.module.css';

export default function TableBody({ type, amount, currency }) {
  return (
    <tbody className={styles.tableBody}>
      <tr className={styles.tableBodyRow}>
        <td className={styles.tableBodyCell}>{type}</td>
        <td className={styles.tableBodyCell}>{amount}</td>
        <td className={styles.tableBodyCell}>{currency}</td>
      </tr>
    </tbody>
  );
}

TableBody.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
