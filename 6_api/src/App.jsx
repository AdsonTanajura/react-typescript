import './App.css'

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'

function App() {

  return (
    <BrowserRouter>
      <h1>Get com Fetch e Axios</h1>
      <div>
        <Link to='/fetch-post'>Fetch Posts</Link>
        <Link to='/axios-post'>Axios Posts</Link>
      </div>
      <Routes>
        <Route path='/fetch-post' element={<FetchPosts />} />
        <Route path='/axios-post' element={<AxiosPosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
