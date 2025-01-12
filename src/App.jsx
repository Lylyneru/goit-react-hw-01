import Profile from "./components/profile/Profile.jsx";
import userData from "./components/profile/userData.json";
import FriendList from "./components/friends/FriendList.jsx";
import friends from "./components/friends/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
