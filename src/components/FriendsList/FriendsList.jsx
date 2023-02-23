import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import { List } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return <FriendsListItem id={friend.id} friend={friend} />;
      })}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
