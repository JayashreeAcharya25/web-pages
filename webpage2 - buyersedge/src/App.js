import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
