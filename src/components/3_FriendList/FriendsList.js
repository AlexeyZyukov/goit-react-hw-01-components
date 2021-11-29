import PropTypes from 'prop-types';
import Friends from './Friends.js';

export default function FriendsList({ props }) {
  console.log(props);

  return (
    <ul className="friends-section">
      {props.map(prop => (
        <ul className="friends-card" key={prop.id}>
          <Friends
            status={prop.isOnline}
            avatar={prop.avatar}
            name={prop.name}
          />
        </ul>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  key: PropTypes.number.isRequired,
};
