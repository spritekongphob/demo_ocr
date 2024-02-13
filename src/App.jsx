import { Ocr } from './components/Ocr'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
        <div>
          <Navbar/>
          <div className="container box-container mt-5 py-3 bg-light ">
                <Ocr/>
          </div>
        </div>      
    </>
  )
}

export default App
