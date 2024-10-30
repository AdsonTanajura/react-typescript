import Search from '../../components/Search.tsx/Search';
import { useState } from 'react';
import { userProps } from '../../types/user';

import User from '../../components/User/User';
const Home = () => {
  const [user, setUser] = useState<userProps | null>(null);

  const loaderUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    const { avatar_url, login, followers, following, location }: userProps =
      data;
    const userData: userProps = {
      avatar_url,
      followers,
      following,
      location,
      login,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loaderUser} />
      {user && <User {...user} />}
    </div>
  );
};

export default Home;
