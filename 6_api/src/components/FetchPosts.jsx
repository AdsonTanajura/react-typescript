import { useEffect, useState } from "react"

const FetchPosts = () => {
    const [posts, setPosts] = useState([]);
    const [erro, setError] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    
                const data = await response.json();
    
                setPosts(data);
            } catch (error) {
                console.error("Fetch error:", error);
                setError(error.toString());
            }
        };
        fetchPost();
    }, []);

  return (
    <div>
      <h1>Posts (Fetch API)</h1>
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

export default FetchPosts
