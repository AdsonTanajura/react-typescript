import { RepoPros } from '../../types/repo';

import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';

const Repo = ({
  forks_count,
  html_url,
  language,
  name,
  stargazers_count,
}: RepoPros) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <BsCodeSlash />
        {language}
      </p>
      <div>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank">
        <span>Ver Código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
