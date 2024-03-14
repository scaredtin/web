import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './router.jsx'
import './index.css';
import { ContextProvider } from './contexts/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes}/>
    </ContextProvider>
  </React.StrictMode>,
)
