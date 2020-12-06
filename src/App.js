import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/Header'
import HomeGuest from './components/HomeGuest'
import Footer from './components/Footer'
import About from './components/About'
import Terms from './components/Terms'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomeGuest} />
        <Route path='/about-us' component={About} />
        <Route path='/terms' component={Terms} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
