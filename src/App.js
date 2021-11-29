import './App.css';

import Section from './components/section';
import Profile from './components/1_Profile/userProfile';
import user from './components/1_Profile/user.json';
import StatisticsList from './components/2_Statistics/StatisticsList';
import data from './components/2_Statistics/data.json';
import FriendsList from './components/3_FriendList/FriendsList';
import friendsData from './components/3_FriendList/friendsData';
import TransactionHistory from './components/4_TransactionHistory/TransactionHistoy';
import transactions from './components/4_TransactionHistory/transactions.json';

function App() {
  return (
    <Section title="Section of items" className="section user-profile">
      <Profile props={user} />
      <StatisticsList title="Statistic" stats={data} />
      <FriendsList props={friendsData} />
      <TransactionHistory props={transactions} />
    </Section>
  );
}

export default App;
