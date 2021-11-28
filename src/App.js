import logo from './logo.svg';
import './App.css';

import Profile from './components/1_Profile/userProfile';
import user from './components/1_Profile/user.json';
import Section from './components/1_Profile/section';

function App() {
  return (
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
  );
}

export default App;
