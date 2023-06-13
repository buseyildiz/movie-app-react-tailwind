import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './Context/Context'
import Home from './Home'
import Favorite from './Favorite'

function App() {
  return (
    <Router>
      <ContextProvider>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/favorite">
            <Favorite/>
          </Route>
      </ContextProvider>
    </Router>
  )
}

export default App