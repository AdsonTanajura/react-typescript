import { useEffect, useState } from "react"
import axios from 'axios';

const AxiosPosts = () => {
    const [posts, setPosts] = useState([]);
    const [erro, setError] = useState("");

    useEffect(() => {
        const axiosPost = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
                setPosts(response.data);
            } catch (error) {
                console.error("axios error:", error);
                setError(error.toString());
            }
        };
        axiosPost();
    }, []);

  return (
    <div>
      <h1>Posts (Axios API)</h1>
      {erro ? (<p>{erro}</p>) : (
        posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))
      )} 
    </div>
  )
}

export default AxiosPosts
