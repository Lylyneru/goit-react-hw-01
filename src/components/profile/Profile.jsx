// import React from "react";
// import styles from "./Profile.module.css";

// const Profile = () => {
//   return (
//     <div>
//       <div>
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//           alt="User avatar"
//         />
//         <p>Petra Marica</p>
//         <p>@pmarica</p>
//         <p>Salvador, Brasil</p>
//       </div>

//       <ul>
//         <li>
//           <span>Followers</span>
//           <span>1000</span>
//         </li>
//         <li>
//           <span>Views</span>
//           <span>2000</span>
//         </li>
//         <li>
//           <span>Likes</span>
//           <span>3000</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ user }) => {
  const { avatar, username, tag, location, stats } = user;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
