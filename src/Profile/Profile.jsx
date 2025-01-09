import css from './Profile.module.css';


const Profile = ({ name, tag, location, image, stats }) => { 
    return (
        <div className={css.wrapper_profile}>
           <div className={css.wrapper_user}>
                <img className={css.img_user}
                src={image}
                alt="User avatar"
                 />
                <p className={css.user_name}>{name}</p>
                <p className={css.user_tag}>@{tag}</p>
                <p className={css.user_tag}>{location}</p>
            </div>

            <ul className={css.list_stats}>
                <li className={css.item_stats}>
                    <span className={css.item_title}>Followers</span>
                    <span className={css.item_data}>{stats.followers}</span>
                </li>
                <li className={css.item_stats}>
                    <span className={css.item_title}>Views</span>
                    <span className={css.item_data}>{stats.views}</span>
                </li>
                <li className={css.item_stats}>
                    <span className={css.item_title}>Likes</span>
                    <span className={css.item_data}>{stats.likes}</span>
                 </li>
            </ul>
        </div>
    )
};

export default Profile;