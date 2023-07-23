import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from "./Router.jsx"

import "./public/css/Main.css"
import UserState from './contexts/UserState.jsx'
import AppState from './contexts/AppState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserState>
      <AppState>
        <RouterProvider router={router}/>
      </AppState>
    </UserState>
  </React.StrictMode>
)
