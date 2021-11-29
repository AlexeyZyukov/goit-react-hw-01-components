import './App.css';

import Section from './components/section';
import Profile from './components/1_Profile/userProfile';
import user from './components/1_Profile/user.json';
import StatisticsList from './components/2_Statistics/StatisticsList';
import data from './components/2_Statistics/data.json';
import FriendsList from './components/3_FriendList/FriendsList';
import friendsData from './components/3_FriendList/friendsData';

function App() {
  return (
    <Section title="Section of items" className="section user-profile">
      <Profile props={user} />
      <StatisticsList items={data} />
      <FriendsList props={friendsData} />
    </Section>
  );
}
/* <Section title="Statistic">
      <StatisticsList
        items={data} />
    </Section>*/
export default App;
