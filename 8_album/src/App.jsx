import { useEffect, useState } from 'react';

import FotoApliada from './components/FotoApliada/FotoApliada'
import FotoList from './components/FotoList/FotoList'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  return (
    <div className='container'>
      <SearchBar />
      <FotoList />
      <FotoApliada />
    </div>
  )
}

export default App
