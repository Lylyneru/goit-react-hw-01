import Profile from "./components/profile/Profile.jsx";
import userData from "./components/profile/userData.json";
import FriendList from "./components/friends/FriendList.jsx";
import friends from "./components/friends/friends.json";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.appContainer}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <div className={s.friendListContainer}>
        <FriendList friends={friends} />
      </div>
    </div>
  );
};

export default App;
