import { useState, useEffect } from "react"

const PerfilDeUsurario = ({userId}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const buscarUsuarios = async() => {
            const resposta = await fetch(`https://my-json-server.typicode.com/AdsonTanajura/users/user/${userId}`)

            const dadosUsuario = await resposta.json()
            setUser(dadosUsuario);

            console.log(user);
        }

        if(userId) {
            buscarUsuarios()
        }
    }, [userId])
  return (
    <div>
        {user ? (
            <div>
                <h1>{user.usuario}</h1>
                <p>{user.idade}</p>
                <p>{user.email}</p>
                <h2>oi</h2>
            </div>
        ) : (
            <div>
                <p>Carregando Usuario</p>
            </div>
        )}
    </div>
  )
}

export default PerfilDeUsurario
