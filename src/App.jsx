import IconComponent from './components/IconComponent'
import { Ocr } from './components/Ocr'
import { Footer } from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-center mt-4 '>DEMO OCR</h1>
       <div className="container  box-container mt-5 py-3 bg-light ">
                <IconComponent />
                <hr />
                <Ocr/>
       </div>
       <Footer/>
    </>
  )
}

export default App
