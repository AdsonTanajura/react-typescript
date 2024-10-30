import Search from '../../components/Search.tsx/Search';
import { useState } from 'react';
import { userProps } from '../../types/user';

import User from '../../components/User/User';
import Error from '../../components/Error/Error';
const Home = () => {
  const [user, setUser] = useState<userProps | null>(null);
  const [error, setError] = useState(false);

  const loaderUser = async (userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    const { avatar_url, login, followers, following, location }: userProps =
      data;

    if (res.status === 404) {
      setError(true);
      return;
    }

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
      {error && <Error />}
    </div>
  );
};

export default Home;
