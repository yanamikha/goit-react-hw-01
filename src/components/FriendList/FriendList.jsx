import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem.jsx';

export default function FriendList({ friends }) {
  return (
    <ul className={css.cardlist}>
      {friends.map((friend) => <li key={friend.id}><FriendListItem friend={friend} /></li>)}
    </ul>
  );
};