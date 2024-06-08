import Login from './routes/Login'
import { NameLogin } from './context/NameContext' 
import Chat from './routes/Chat'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

 
 const router = createBrowserRouter([
  { 
    path: '/',
    element: 
    <NameLogin> 
      <Login />,
    </NameLogin>
  },
  {
    path: '/chat',
    element: 
    <NameLogin>
      <Chat />,
    </NameLogin>
    },
 ]);
 export default function App() {
  return <RouterProvider router={router} />;
 }
