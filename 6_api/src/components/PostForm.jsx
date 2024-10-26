import { useEffect, useState } from "react"
import axios from "axios"

const PostForm = ({ onSuccess, post }) => {
    const [title, setTitle] = useState(post?.title || '');
    const [body, setBody] = useState(post?.body || '');

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newPost = { title, body, userId: 1 };

        try {
            // let response;
            if (post && post.id) {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, newPost);
                onSuccess(response.data, 'update');
            } else {
                const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
                onSuccess(response.data, 'add');
            }

            setTitle('');
            setBody('');

        } catch (error) {
            console.log("Erro ao enviar postagem", error);
        }
    };

    const handleDelete = async () => {
        try {
           await axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`);
                
            onSuccess(post, 'delete');
            setTitle('');
            setBody('');

        } catch (error) {
            console.log("Erro ao enviar postagem", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(event) => setTitle(event.target.value)} 
                    placeholder="Digite o título"
                />
            </div>
            <div>
                <textarea 
                    type="text" 
                    value={body} 
                    onChange={(event) => setBody(event.target.value)} 
                    placeholder="Digite o conteúdo"
                />
            </div>
            <button type="submit">{post && post.id ? 'Atualizar' : 'Enviar'}</button>
            {post && (
                <button type="button" onClick={handleDelete}>Excluir</button>
            )}
        </form>
    );
};

export default PostForm;
