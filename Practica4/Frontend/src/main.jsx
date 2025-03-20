import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/routes'
import { AuthContextProvider } from './context/AuthContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider> {/* Cambiado de AuthProvider a AuthContextProvider */}
      <RouterProvider router={routes} />
    </AuthContextProvider>
  </StrictMode>
)


