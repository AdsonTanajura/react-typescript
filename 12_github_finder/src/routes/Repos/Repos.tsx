import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RepoPros } from '../../types/repo';

import BackBtn from '../../components/BackBtn/BackBtn';
import Loader from '../../components/Loader/Loader';
import Repo from '../../components/Repo/Repo';
import classes from './Repos.module.css';

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
    <div className={classes.repos}>
      <BackBtn />
      <h2>Explore os repositorios do usuario: {username}</h2>
      {repos && repos.length === 0 && <p>Não tem repositorio</p>}
      {repos && repos.length > 0 && (
        <div className={classes.repos_container}>
          {repos.map((repo: RepoPros) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repos;
