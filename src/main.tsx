import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Home } from './pages/Home'
import { ArtworkDetail } from './pages/ArtworkDetail'
import { Profile } from './pages/Profile'
import { Upload } from './pages/Upload'
import { NotFound } from './pages/NotFound'
import './styles/globals.css'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'art/:id', element: <ArtworkDetail /> },
    { path: 'profile/:artist', element: <Profile /> },
    { path: 'upload', element: <Upload /> },
    { path: '*', element: <NotFound /> },
  ]}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  { basename: import.meta.env.DEV ? '/' : '/ArtShare' }

)