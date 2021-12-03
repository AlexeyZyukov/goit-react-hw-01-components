import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Friends from './Friends';
import friendsStyle from './friendsStyle.module.css';

export default function FriendsList({ props }) {
  return (
    <div className={friendsStyle.friendsSection}>
      <ul>
        {props.map(prop => (
          <Fragment>
            <Friends
              key={prop.id}
              status={prop.isOnline}
              avatar={prop.avatar}
              name={prop.name}
            />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

FriendsList.propTypes = {
  key: PropTypes.number.isRequired,
};
