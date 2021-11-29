import PropTypes from 'prop-types';

export default function Statistic({ label, percentage }) {
  return (
    <ul className="stat-list">
      <li className="item" id="{id}">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    </ul>
  );
}

Statistic.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
