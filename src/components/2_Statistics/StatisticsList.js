import PropTypes from 'prop-types';
import Statistic from './Statistic.js';

function StatisticsList({ title, items }) {
  return (
    <div className="statistic">
      {title && <h2>{title}</h2>}
      <ul>
        {items.map(item => (
          <Statistic
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </div>
  );
}

StatisticsList.propTypes = {
  key: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsList;
