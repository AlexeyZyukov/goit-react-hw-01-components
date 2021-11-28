import './App.css';

import Section from './components/section';
import Profile from './components/1_Profile/userProfile';
import user from './components/1_Profile/user.json';
import StatisticsList from './components/2_Statistics/StatisticsList';
import data from './components/2_Statistics/data.json';

function App() {
  return (
    (
      <Section className="section user-profile">
        <Profile
          key={user.tag}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>
    ),
    (
      <Section className="section statistic">
        <StatisticsList items={data} />
      </Section>
    )
  );
}

export default App;
