import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.scss'
import Router from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<h2>Загрузка...</h2>}>
    <RouterProvider router={Router}/>
  </React.Suspense>
)
