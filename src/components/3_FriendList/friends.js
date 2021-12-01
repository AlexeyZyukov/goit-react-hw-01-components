import PropTypes from 'prop-types';
import friendsStyle from './friendsStyle.module.css';

export default function Friends({ status, avatar, name }) {
  return (
    <li className={friendsStyle.friendsItem}>
      <span
        className={
          status ? friendsStyle.statusOnline : friendsStyle.statusOffline
        }
      ></span>
      <img
        className={friendsStyle.friendsAvatar}
        src={avatar}
        alt="User avatar"
        width="150"
      />
      <p className="name">{name}</p>
    </li>
  );
}

Friends.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
