import { useState } from 'react'
import Login from './routes/Login'
import Chat from './routes/Chat'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

 
 const router = createBrowserRouter([
  {
  path: '/',
  element: <Login />,
  },
  {
    path: '/chat',
    element: <Chat />,
    },
 ]);
 export default function App() {
  return <RouterProvider router={router} />;
 }
