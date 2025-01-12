const FriendListItem = ({ name, isOnline }) => {
  return (
    <div>
      <p>{name}</p>
      <span style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
};

export default FriendListItem;
