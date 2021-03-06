import PropTypes from 'prop-types';
import './profile.css';
/*здесь содержится только разметка компонента. Никакие данные сюда не передаются*/
export default function Profile({ props }) {
  // const { key, username, tag, location, avatar, followers, views, likes } =
  //   props;
  return (
    <div className="profile">
      {props.key}
      <div className="description">
        <img src={props.avatar} alt={props.tag} className="avatar" />
        <p className="name profile-info">{props.username}</p>
        <p className="tag profile-info">@{props.tag}</p>
        <p className="location profile-info">{props.location}</p>
      </div>

      <ul className="stats">
        <li className="stats-block">
          <span className="label stats-block-info">Followers: </span>
          <span className="quantity stats-block-info">
            {props.stats.followers}
          </span>
        </li>
        <li className="stats-block">
          <span className="label stats-block-info">Views: </span>
          <span className="quantity stats-block-info">{props.stats.views}</span>
        </li>
        <li className="stats-block">
          <span className="label stats-block-info">Likes: </span>
          <span className="quantity stats-block-info">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  username: 'unknown user',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
};

Profile.propTypes = {
  key: PropTypes.number,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
/* const profile = (
    <div className="profile">
        <div className="description">
            <img
                src={user.avatar}
                alt={user.tag}
                className="avatar"
            />
            <p className="name">{user.username}</p>
            <p className="tag">{user.tag}</p>
            <p className="location">{user.location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers: </span>
                <span className="quantity">{user.stats.followers}</span>
            </li>
            <li>
                <span className="label">Views: </span>
                <span className="quantity">{user.stats.views}</span>
            </li>
            <li>
                <span className="label">Likes: </span>
                <span className="quantity">{user.stats.likes}</span>
            </li>
        </ul>
    </div>
);*/
