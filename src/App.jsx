import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'

function App() { 
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const alerta = () => {
      alert('Olá')
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(nome)
      console.log(email)
  }
  const [user, setUser] = useState({
    first_name: "Erro",
    last_name: "",
    email: "Erro",
    })
  const getUser = () => {
    fetch('https://reqres.in/api/users/1')
    .then((resposta) => resposta.json())
    .then((json) => {
      if(json.data){
        setUser(json.data)
      }
    })
  }

  useEffect(() => {
    getUser()
  },[])

  return (
    <>
        <Menu title ="Site Fatec"/>
        <hr/>
        <p onClick={alerta}>Dados</p>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <hr/>
        <form>
        <input onChange={(e) => {setNome(e.target.value)}} type="text" placeholder='Digite seu nome' /><br/>
        <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder='Digite seu email' /><br/>
        <button onClick={handleSubmit}>Cadastrar</button>
        </form>
        <hr/>
        <p>Exemplo</p>
        <p>Nome: {user.first_name} {user.last_name}</p>
        <p>Email: {user.email}</p>

    </>
  )
}

export default App
