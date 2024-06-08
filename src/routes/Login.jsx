import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { NameContext } from '../context/NameContext'

const Login = () => {
const navigate = useNavigate()
  const [name, setName] = useContext(NameContext);
 
  
  return (
    <div className="flex flex-col items-center justify-center py-60">
      <fieldset>
        <div className='flex flex-col items-center justify-center p-6 bg-gray-300 rounded-lg'>
          <label className='pb-2 font-bold'htmlFor="name">Digite seu nome: </label>
          <input className='border border-radius border-gray-600 mb-4 rounded w-44' 
            type="text" name="name" value={name} onChange={e => setName(e.target.value)}
            placeholder="Digite seu nome"></input>
          <button className='border border-radius border-black bg-blue-300 rounded p-1 font-bold' 
            name="Enviar" onClick={() => navigate("/chat")}>
            Enviar
          </button>
        </div>
      </fieldset>

    </div>
  )
}

export default Login