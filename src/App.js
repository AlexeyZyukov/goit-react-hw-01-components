import './App.css';

import Section from './components/elements/section';
import Profile from './components/1_Profile/userProfile';
import user from './data/user.json';
import StatisticsList from './components/2_Statistics/StatisticsList';
import data from './data/data.json';
import FriendsList from './components/3_FriendList/FriendsList';
import friendsData from './data/friendsData';
import TransactionHistory from './components/4_TransactionHistory/TransactionHistoy';
import transactions from './data/transactions.json';

function App() {
  return (
    <Section title="Section of items" className="section user-profile">
      <Profile props={user} />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendsList props={friendsData} />
      <TransactionHistory props={transactions} />
    </Section>
  );
}

export default App;
