import { userProps } from '../../types/user';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const User = ({
  avatar_url,
  followers,
  following,
  location,
  login,
}: userProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
        <Link to={'/repos/' + login}>Ver melhores projetos</Link>
      </div>
    </div>
  );
};

export default User;
