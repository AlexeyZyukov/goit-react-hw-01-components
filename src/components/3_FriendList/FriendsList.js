import PropTypes from 'prop-types';
import Friends from './Friends.js';
import friendsStyle from './friendsStyle.module.css';

export default function FriendsList({ props }) {
  console.log(props);
  return (
    <ul className={friendsStyle.friendsSection}>
      {props.map(prop => (
        <ul className={friendsStyle.friendsCard}>
          <Friends
            key={prop.id}
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
