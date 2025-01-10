import FriendListItem from '../FriendListItem/FriendListItem'
import css from './FriendList.module.css'

const FriendList = ({friends}) => {
    return (
        <ul className={css.list_friends}>
            {friends.map(item => {
               return (<li className={css.list_card} key={item.id}>
                   <FriendListItem
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}/>
	                </li>)
           })}
        </ul>
        
    )
}

export default FriendList;