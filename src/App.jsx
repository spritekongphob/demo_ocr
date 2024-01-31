import IconComponent from './components/IconComponent'
import { Ocr } from './components/Ocr'
import './App.css'

function App() {

  return (
    <>
      <div className='body'>
       <div className="container box-container mt-5  ">
          <h1 className='text-center'>IMAGE TO TEXT</h1>
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
