import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                const { avatar, name, isOnline, id } = friend;
                return (
                    <li key={id} className={css.item}>
                        <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{name}</p>
                    </li>
                )
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
};