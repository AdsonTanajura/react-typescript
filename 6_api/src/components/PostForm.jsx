import { useState } from "react"
import axios from "axios"

const PostForm = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

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
