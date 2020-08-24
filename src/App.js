import React from 'react'
import './App.css'
import Split from './Components/Split'

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={2}>
        This is the left split
      </Split>
      <Split className='right'>
        This is the right split
      </Split>
    </main>
  )
}

export default App;
