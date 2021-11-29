import PropTypes from 'prop-types';
import Statistic from './Statistic.js';

function StatisticsList({ items }) {
  return (
    <div className="statistic">
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