import { useEffect, useState } from 'react';
import axios from 'axios';

type Post = {
  userId: number;
  id: number;
  alt_description: string;
};

const ExivirPostagems = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarPostagem = async () => {
      try {
        const response = await axios.get<Post[]>(
          'https://api.unsplash.com/photos/?client_id=T9evhM2D-a704asaws2GoZVBe5Z9FFqhXubwoQx9NGQ'
        );
        setPosts(response.data.slice(0, 5));
      } catch (error) {
        console.log(error);
      } finally {
        setCarregando(false);
      }
    };
    buscarPostagem();
  }, []);
  return (
    <div>
      <h2>Lista de postagem</h2>
      {carregando ? (
        <p>Carregando posts...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.alt_description}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExivirPostagems;
