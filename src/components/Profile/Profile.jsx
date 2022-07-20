import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
    return (<div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{name}</p>
            <p className={css.tag}>@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.statsItem}>
                <span className="label">Followers</span>
                <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li className={css.statsItem}>
                <span className="label">Views</span>
                <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.statsItem}>
                <span className="label">Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
};