import PropTypes from 'prop-types';

export default function Friends({ isOnline, avatar, name }) {
  return (
    <li className="item">
      <span class="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friends.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
