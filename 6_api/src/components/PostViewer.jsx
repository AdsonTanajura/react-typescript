import { useParams } from 'react-router-dom';
import useHttp from '../useHttp';
const PostViewer = () => {
    const {postId} = useParams();

    const {data, error, loading} = useHttp(`https://jsonplaceholder.typicode.com/posts/${postId}`, "GET", null, [postId])
  return (
    <div>
      <h1>Post: {postId}</h1>
      {loading && <p>Carregando....</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      {data && (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
      )}
    </div>
  )
}

export default PostViewer
