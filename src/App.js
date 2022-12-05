import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Login from './Components/Login'
import Tweet from './Components/Tweet'

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Tweet />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App