import css from './FriendListItem.module.css';
import clsx from "clsx";

export default function FriendListItem({ friend }) {
  let { avatar, name, isOnline } = friend;
  return (
    <div className={clsx(css.card, isOnline && css.online || css.offline)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={isOnline && css.online || css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};