import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center py-60">
      <form>
        <div className='flex flex-col items-center justify-center p-6 bg-gray-300 rounded-lg'>
          <label className='pb-2 font-bold'htmlFor="name">Digite seu nome: </label>
          <input className='border border-radius border-gray-600 mb-4 rounded w-44' type="text" name="name" placeholder="Digite seu nome"></input>
          <input className='border border-radius border-black bg-blue-300 rounded p-1 font-bold' type="submit" name="Enviar"></input>
        </div>
      </form>
      <div className="my-6">
        <Link
          to="/chat"
          className="inline-flex rounded-md bg-gray-100 p-4 text-base font-semibold hover:bg-gray-200 md:text-lg"
        >
          Abrir lista de compras
        </Link>
      </div>

    </div>
  )
}

export default Login