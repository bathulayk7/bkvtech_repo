import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import About from '../pages/About'

const AppRouter = () => {
  return (
    <Routes>
        <Route index  element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/*" element={<ErrorPage/>} />
    </Routes>
  )
}

export default AppRouter