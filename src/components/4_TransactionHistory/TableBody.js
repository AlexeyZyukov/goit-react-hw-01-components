import PropTypes from 'prop-types';

export default function TableBody({ type, amount, currency }) {
  return (
    <tbody className="table_body">
      <tr className="table_body__row">
        <td className="table_body__cell">{type}</td>
        <td className="table_body__cell">{amount}</td>
        <td className="table_body__cell">{currency}</td>
      </tr>
    </tbody>
  );
}

TableBody.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
