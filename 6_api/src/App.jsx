import './App.css'

import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'
import PostManager from './components/PostManager'
import PostLoader from './components/PostLoader'

function App() {

  return (
    <BrowserRouter>
      <h1>Get com Fetch e Axios</h1>
      <div>
        <Link to='/fetch-post'>Fetch Posts</Link>
        <Link to='/axios-post'>Axios Posts</Link>
      </div>
      <div>
        <Link to={'/posts'}>Gerenciar posts</Link>
      </div>
      <div>
        <Link to={'/posts/1'}>Carregar Post 1</Link>
        <Link to={'/posts/999'}>Carregar Post 999</Link>
      </div>
      <Routes>
        <Route path='/fetch-post' element={<FetchPosts />} />
        <Route path='/axios-post' element={<AxiosPosts />} />
        <Route path='/posts' element={<PostManager />}/>
        <Route path='/posts/:postId' element={<PostLoader />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
