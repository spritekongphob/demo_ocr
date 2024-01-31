import { useState } from 'react'
import IconComponent from './components/IconComponent'
import { Ocr } from './components/Ocr'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
       <div className="container">
          <h1 className='text-center mt-5'>IMAGE TO TEXT</h1>
          <div className="icon mt-4">
                <IconComponent />
                <Ocr/>
          </div>

       </div>
      </div>
     
    </>
  )
}

export default App
