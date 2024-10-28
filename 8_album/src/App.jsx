import { useEffect, useState } from 'react';
import axio from 'axios';

import FotoApliada from './components/FotoApliada/FotoApliada';
import FotoList from './components/FotoList/FotoList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState('');

  const fetchData = async ({ query, categoria }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const response = await axio.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
      },
    });

    console.log(response);
  };

  useEffect(() => {
    fetchData(query, categoria);
  }, []);
  return (
    <div className="container">
      <SearchBar />
      <FotoList />
      <FotoApliada />
    </div>
  );
}

export default App;
