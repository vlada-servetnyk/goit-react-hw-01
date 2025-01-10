import css from './FriendListItem.module.css';
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.card_name}>{name}</p>
            <p className={clsx(
                css.card_status,
                isOnline ? css.green : css.red
            )}>
                 {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>

    )
};
export default FriendListItem;