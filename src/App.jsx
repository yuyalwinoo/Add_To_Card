import { useState } from 'react'
import './App.css'
import Main from './layout/Main'
import ItemContextProvider from './store/ItemContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ItemContextProvider>
        <Main/>
      </ItemContextProvider>
    </>
  )
}

export default App
