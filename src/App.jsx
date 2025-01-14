import Profile from "./components/profile/Profile.jsx";
import userData from "./components/profile/userData.json";
import FriendList from "./components/friends/FriendList.jsx";
import friends from "./components/friends/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import transactions from "./components/TransactionHistory/transactions.json";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.appContainer}>
      <div className={s.appContainer}>
        <Profile
          avatar={userData.avatar}
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          stats={userData.stats}
        />
        <div className={s.friendListContainer}>
          <FriendList friends={friends} />
        </div>
      </div>
      <div className={s.transactionSection}>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;
