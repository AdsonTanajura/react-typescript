import { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";

const PostManager = () => {
    const [posts, setPosts] = useState([]);
    const [erro, setError] = useState("");
 
    const [selectPost, setSelectPost] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleSuccess = (post, operation) => {
        if(operation === 'add') {
            setPosts((currentPosts) => [post, ...currentPosts]);
        } else if (operation === 'update') {
            setPosts((currentPosts) => 
                currentPosts.map((p) => (p.id === post.id ? post : p))
            );
        } else if (operation === 'delete') {
            setPosts((currentPosts) => 
                currentPosts.filter((p) => (p.id !== post.id))
            );
        }
        handleCancelEdit()
    };

    useEffect(() => {
        const axiosPost = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
                setPosts(response.data.slice(0,5));
            } catch (error) {
                console.error("axios error:", erro);
                setError(error.toString());
            }
        };
        axiosPost();
    }, [erro]);

    const handleEdit =  (post) => {
        setSelectPost(post);
        setIsEditing(true); 
    }
    const handleCancelEdit = () => {
        setSelectPost(null);
        setIsEditing(false);

    }

  return (
    <div>
        <h1>Gerenciar posts</h1>
        <PostForm post={isEditing ? selectPost : null} onSuccess={handleSuccess}/>
        {isEditing && <button onClick={handleCancelEdit} >Cancelar edicao</button>}
        <h2>Postagens</h2>
        {posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button onClick={() => handleEdit(post)}>Editar</button>
            </div>
        ))}
    </div>
  )
}

export default PostManager
