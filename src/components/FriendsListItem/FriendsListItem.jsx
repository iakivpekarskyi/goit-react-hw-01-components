import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendsListItem.styled';

export const FriendsListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <Status status={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
