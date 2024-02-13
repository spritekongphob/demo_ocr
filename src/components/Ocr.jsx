import Pdfview from './Pdfview'
import { FormComp } from './FormComp'
import '../css/ocr.css'

export const Ocr = () => {
  return (
    <div className='row  pt-4 pb-4'>
      <div className="col-lg-6 d-flex justify-content-center">
        <div className="box">
          <Pdfview />      
        </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-center">
        <div className="boxbar">
          <FormComp />
        </div>
      </div>
    </div>
  )
}
