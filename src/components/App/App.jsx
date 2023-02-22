import { Profile } from '../Profile/Profile';
import user from '../Data/user.json';
import { Statistics } from '../Statistics/Statistics';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import { FriendsList } from '../FriendsList/FriendsList';
import transactions from '../Data/transactions.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import { AppWrapper } from './App.styled';

export const App = () => {
  return (
    <AppWrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </AppWrapper>
  );
};