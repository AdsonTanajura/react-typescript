import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RepoPros } from '../../types/repo';

import classes from './Repos.module.css ';
import BackBtn from '../../components/BackBtn/BackBtn';
import Loader from '../../components/Loader/Loader';

const Repos = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState<RepoPros[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async (username: string) => {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();
      console.log(data);
      setIsLoading(false);
      setRepos(data);
    };

    loadRepos(username!);
  }, [username]);

  if (!repos && isLoading) return <Loader />;

  return (
    <div>
      <BackBtn />
      <h2>Explore os repositorios do usuario: {username}</h2>
      {repos && repos.length === 0 && <p>Não tem repositorio</p>}
      {repos && repos.length > 0 && (
        <div>
          {repos.map((repo: RepoPros) => (
            <p>{repo.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
