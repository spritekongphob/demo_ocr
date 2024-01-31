import Pdfview from './Pdfview'
import '../css/ocr.css'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card';

export const Ocr = () => {
  return (
    <div className='row mt-5 mb-5 '>
        <div className="col-lg-6 d-flex justify-content-center" >
        <div className="box" >
        <Pdfview/>
        </div>
        </div>

        <div className="col-lg-6 d-flex justify-content-center" >
           <div className="card boxbar">
              <Table striped bordered hover>             
                <thead>
                  <tr>
                    <th style={{ textAlign: 'center' }}>PROPERTY</th>
                    <th style={{ textAlign: 'center' }}>RESULT </th>
                  </tr>
                </thead>
          
                <tbody>
                  <tr>
                    <td>1</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td  style={{ textAlign: 'center' }}><input type='text' /></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td style={{ textAlign: 'center' }} ><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td  style={{ textAlign: 'center' }}><input type='text'/></td>
                  </tr>

                </tbody>
              </Table>
          </div>
        </div>
    </div>
  )
}
