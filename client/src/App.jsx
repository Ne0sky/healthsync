import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='text-red-600 font-bold text-3xl'>Hello World</p>
    </>
  )
}

export default App
