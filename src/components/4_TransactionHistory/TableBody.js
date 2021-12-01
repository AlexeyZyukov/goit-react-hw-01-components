import PropTypes from 'prop-types';
import styles from './transaction.module.css';

export default function TableBody({ type, amount, currency }) {
  return (
    <tbody>
      <tr className={styles.row}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
}

TableBody.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
