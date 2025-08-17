import React from 'react'
import Home from '../src/pages/Home'
import Canvas from './canvas'
import Customizer from '../src/pages/Customizer'
const App = () => {
  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customizer/>
    </main>
  )
}

export default App