// No App.js
import { useEffect, useState } from 'react';
import axios from 'axios'; // Corrigir para axios

import FotoApliada from './components/FotoApliada/FotoApliada';
import FotoList from './components/FotoList/FotoList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fotos, setFotos] = useState([]); // Garantir array vazio como valor inicial
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [activateSearch, setActivateSearch] = useState(false);

  const fetchData = async ({ query, categoria }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    if (query || categoria) {
      let searchQuery = query;

      if (query && categoria) {
        searchQuery = `${query} ${categoria}`;
      } else if (categoria) {
        searchQuery = categoria;
      }

      const response = await axios.get(
        'https://api.unsplash.com/search/photos',
        {
          params: {
            client_id: apiKey,
            query: searchQuery,
          },
        }
      );
      setFotos(response.data.results); // Corrigir para response.data.results
      return;
    }

    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
        count: 10,
      },
    });
    setFotos(response.data);
    console.log(fotos);
  };

  useEffect(() => {
    fetchData({ query, categoria });
  }, []);

  useEffect(() => {
    if (activateSearch) {
      fetchData({ query, categoria });
      setActivateSearch(false);
    }
  }, [activateSearch]);

  return (
    <div className="container">
      <SearchBar
        setQuery={setQuery}
        setCategoria={setCategoria}
        setActivateSearch={setActivateSearch}
      />
      <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
      {fotoAmpliada && (
        <FotoApliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
      )}
    </div>
  );
}

export default App;
