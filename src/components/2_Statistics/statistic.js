import PropTypes from 'prop-types';

export default function Statistic({ label, percentage }) {
  return (
    <ul className="stat-list">
      <li className="stat-item" id="{id}">
        <span className="stat-label">{label}</span>
        <span className="stat-percentage">{percentage}</span>
      </li>
    </ul>
  );
}

Statistic.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
