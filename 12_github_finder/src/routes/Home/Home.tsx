import Search from '../../components/Search.tsx/Search';
import { useState } from 'react';
import { userProps } from '../../types/user';
const Home = () => {
  const [user, setUser] = useState<userProps | null>(null);

  const loaderUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <Search loadUser={loaderUser} />
    </div>
  );
};

export default Home;
