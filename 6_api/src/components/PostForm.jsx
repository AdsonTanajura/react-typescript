import { useState } from "react"
import axios from "axios"

const PostForm = ({onSuccess}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newPost = {title, body, userId: 1}
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost)

            onSuccess(response.data, 'add')
        } catch (error) {
            console.log("Erro ao enviar postagem", error)
        }

    };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Digite o titulo"/>
        </div>
        <div>
            <textarea type="text" value={body} onChange={(event) => setBody(event.target.value)} placeholder="Digite o conteudo">
            </textarea>
        </div>
        <button type="submit">Enviar</button>

    </form>
  )
}

export default PostForm
