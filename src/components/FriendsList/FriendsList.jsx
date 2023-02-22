import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Item key={id}>
            <Status status={isOnline} />
            <Avatar src={avatar} alt="User avatar" />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </List>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
