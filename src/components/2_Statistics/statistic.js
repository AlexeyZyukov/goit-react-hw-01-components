import PropTypes from 'prop-types';

export default function Statistic({ id, label, percentage }) {
  return (
    <ul class="stat-list">
      <li class="item" id="{id}">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
      </li>
    </ul>
  );
}

Statistic.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
