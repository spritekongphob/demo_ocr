import "../css/Form.css"
import "../css/textinput.css"
import React, { useEffect } from 'react';

export const FormComp = () => {
      //ฟั่งชั่นคำสั่งตรวจสอบ input เมื่อไม่มีข้อมูลจะขึ้นแจ้งเตือนเป็นกรอบสีแดง
      useEffect(() => {
          const inputElements = document.querySelectorAll('.form-control');
  
          const handleInputChange = (event) => {
              const inputElement = event.target;
              if (inputElement.value.trim() !== '') {
                  inputElement.classList.remove('is-invalid');
              } else {
                  inputElement.classList.add('is-invalid');
              }
          };
  
          // เพิ่มฟังก์ชันสำหรับฟังเหตุการณ์ไปยังอิลิเมนต์ input
          inputElements.forEach(inputElement => {
              inputElement.addEventListener('input', handleInputChange);
          });
  
          // ฟังก์ชันทำความสะอาดเพื่อลบอิลิเมนต์ฟังก์ชันเมื่อคอมโพเนนต์ถูก unmount
          return () => {
              inputElements.forEach(inputElement => {
                  inputElement.removeEventListener('input', handleInputChange);
              });
          };
      }, []); // อาเรย์ขึ้นอย่างว่างเปล่าเพื่อให้เอฟเฟกต์ทำงานเฉพาะครั้งเดียวเมื่อติดตั้งคอมโพเนนต์

    

  return (
    <>
      <form className="form-horizontal">
          <div className="container text-center sticky-top">
            <div className="row align-items-start header-table py-3">
              <div className="col-md-7 text-light">Property</div>
              <div className="col-md-5 text-light">Result</div>
            </div>
          </div> 

        <div className="row ps-4 ">
          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Appeamce</div>
            </div>
            <div className="col-md-4 input-text  ">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Fash point</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>                                                                 
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Feezing point</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>                                                     
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Sulphur</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Density @15˚C </div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Visual Color</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Corrosion</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>     
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Dis 10% </div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>                                                                                                                 
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">A Dis 50%</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>                                                                                                                                                           
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Dis 90% </div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">End point</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Residue </div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Existent Gum </div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>     
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Filter</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>                                                     
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Viscosity </div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Specific Energy</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">EC Conduct</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Thermal</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Thermal Stability ( Control Temp )</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">MSEP ( Fuel With static )</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Aromatic</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Bocle</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Antioxidance </div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Metal First Dopping</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Metal Commulative</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Static Commulative</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">( Disillation ) loss % V/V</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Stadis-450</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Total Acid</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particulate Contamination</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Particula code{">"}=4um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particula code{">"}=6um </div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particula code{">"}=14um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particula code{">"}=21um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particula code{">"}=25um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Particula code{">"}=30um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Fame</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">issue 33</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Remark</div>
            </div>
            <div className="col-md-4 input-text">
                  <input className="form-control is-invalid" required></input>
            </div>
          </div>
        </div>
     </form>
     
   </>
  );
};
