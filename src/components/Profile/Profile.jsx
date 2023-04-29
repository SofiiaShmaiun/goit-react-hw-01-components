import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile({ items }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={items.avatar}
          alt={items.username}
          className={css.avatar}
          width="480"
        />
        <p className={css.name}>{items.username}</p>
        <p className={css.tag}>@{items.tag}</p>
        <p className={css.location}>{items.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{items.stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{items.stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{items.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  items: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
