import PropTypes from 'prop-types';
import Statistic from './Statistic.js';
import statisticStyle from './statisticStyle.css';

function StatisticsList({ title, stats }) {
  return (
    <div className="statistic">
      {title && <h2 className="stat-header">{title}</h2>}
      <ul className="stat-element">
        {stats.map(item => (
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
  title: PropTypes.string,
  key: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsList;
