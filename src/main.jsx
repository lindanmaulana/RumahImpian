import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePages from './Pages/HomePages.jsx'
import ErrorPage from './404.jsx'
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contoh",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
