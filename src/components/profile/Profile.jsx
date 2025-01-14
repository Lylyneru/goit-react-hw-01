import s from "./Profile.module.css";

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={s.profileContainer}>
      <img src={avatar} alt="user avatar" className={s.profileAvatar} />
      <p className={s.profileName}>{username}</p>
      <p className={s.profileTag}>@{tag}</p>
      <p className={s.profileLocation}>{location}</p>
      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
