import logo from "./logo.svg";
import "./App.css";

import Profile from "./components/1_Profile/userProfile";
import user from "./components/1_Profile/user.json";

function App() {
  return (
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
  );
}

export default App;
