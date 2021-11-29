import PropTypes from 'prop-types';
import Friends from './Friends.js';

export default function FriendsList({ props }) {
  return (
    <ul>
      {props.map(prop => (
        <ul key={prop.id}>
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
