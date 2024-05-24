import { useState } from 'react'
import './App.css'

import Component from './starter/01-return';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Component />
    </main>
  )
}

export default App
