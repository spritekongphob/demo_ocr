import Pdfview from './Pdfview'
import '../css/ocr.css'

export const Ocr = () => {
  return (
    <div className='row mt-5 mb-5 '>
        <div className="col-lg-6 d-flex justify-content-center" >
        <div className="box" >
        <Pdfview/>
        </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center" >
        <div className="box" >
            
        </div>
        </div>
    </div>
  )
}
