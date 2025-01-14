import clsx from "clsx";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ul>
      <li className={s.item}>
        <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
        <span
          className={clsx(s.status, {
            [s.online]: isOnline,
            [s.offline]: !isOnline,
          })}
        >
          {isOnline ? "Online" : "Offline"}
        </span>
      </li>
    </ul>
  );
};

export default FriendListItem;
