// import PropTypes from 'prop-types';
import TableHead from './TableHead';
import TableBody from './TableBody';

export default function TransactionHistory({ props }) {
  return (
    <>
      <TableHead />
      {props.map(prop => (
        <TableBody
          type={prop.type}
          amount={prop.amount}
          currency={prop.currency}
        />
      ))}
    </>
  );
}
