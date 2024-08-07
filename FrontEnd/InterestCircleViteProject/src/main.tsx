/*
 * @Author: HHC
 * @Date: 2024-08-06 11:31:42
 * @LastEditTime: 2024-08-07 12:30:03
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// import Login from "./components/Login.jsx"
import Login from './Login.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <Login />
  </React.StrictMode >,
)
