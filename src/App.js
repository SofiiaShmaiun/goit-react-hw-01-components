import Profile from './components/Profile/Profile';
import Statistics from './components/Statictics/Statistics';
import FriendsList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 25,
        flexDirection: 'column',
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      <Profile items={user} />
      <Statistics items={data} />
      <FriendsList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
