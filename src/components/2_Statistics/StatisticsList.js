import PropTypes from 'prop-types';
import Statistic from './statistic.js';

function StatisticsList({ items }) {
  return (
    <div>
      {items.map(item => (
        <ul key={item.id}>
          <Statistic label={item.label} percentage={item.percentage} />
        </ul>
      ))}
    </div>
  );
}

StatisticsList.propTypes = {
  key: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsList;
