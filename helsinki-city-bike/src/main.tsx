import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/styles.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/error-page.tsx'
import DataImport from './pages/data-import.tsx'
import Journeys from './pages/journeys.tsx'
import Stations from './pages/stations.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'data-import',
    element: <DataImport />
  },
  {
    path: 'journeys',
    element: <Journeys />
  },
  {
    path: 'stations',
    element: <Stations />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
