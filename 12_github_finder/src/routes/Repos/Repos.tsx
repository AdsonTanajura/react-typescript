import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RepoPros } from '../../types/repo';

import classes from './Repos.module.css ';
import BackBtn from '../../components/BackBtn/BackBtn';
import Loader from '../../components/Loader/Loader';

const Repos = () => {
  const { username } = useParams();
  const [repo, setRepo] = useState<RepoPros[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async (username: string) => {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);
    };

    loadRepos(username);
  }, []);

  return (
    <div>
      <BackBtn />
      Repos {username}
    </div>
  );
};

export default Repos;
