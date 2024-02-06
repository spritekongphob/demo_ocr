import "../css/Form.css";
import "../css/textinput.css";
import React, { useState } from 'react';

export const FormComp = () => {
    // กำหนดค่าเริ่มต้นเป็นช่องว่าง
    const [inputValue, setInputValue] = useState(''); 
    const [inputValue1, setInputValue1] = useState(''); 
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const [inputValue6, setInputValue6] = useState('');
    const [inputValue7, setInputValue7] = useState('');
    const [inputValue8, setInputValue8] = useState('');
    const [inputValue9, setInputValue9] = useState('');
    const [inputValue10, setInputValue10] = useState('');
    const [inputValue11, setInputValue11] = useState('');
    const [inputValue12, setInputValue12] = useState('');
    const [inputValue13, setInputValue13] = useState('');
    const [inputValue14, setInputValue14] = useState('');
    const [inputValue15, setInputValue15] = useState('');
    const [inputValue16, setInputValue16] = useState('');
    const [inputValue17, setInputValue17] = useState('');
    const [inputValue18, setInputValue18] = useState('');
    const [inputValue19, setInputValue19] = useState('');
    const [inputValue20, setInputValue20] = useState('');
    const [inputValue21, setInputValue21] = useState('');
    const [inputValue22, setInputValue22] = useState('');
    const [inputValue23, setInputValue23] = useState('');
    const [inputValue24, setInputValue24] = useState('');
    const [inputValue25, setInputValue25] = useState('');
    const [inputValue26, setInputValue26] = useState('');
    const [inputValue27, setInputValue27] = useState('');
    const [inputValue28, setInputValue28] = useState('');
    const [inputValue29, setInputValue29] = useState('');
    const [inputValue30, setInputValue30] = useState('');
    const [inputValue31, setInputValue31] = useState('');
    const [inputValue32, setInputValue32] = useState('');
    const [inputValue33, setInputValue33] = useState('');
    const [inputValue34, setInputValue34] = useState('');
    const [inputValue35, setInputValue35] = useState('');
    const [inputValue36, setInputValue36] = useState('');
    const [inputValue37, setInputValue37] = useState('');
    const [inputValue38, setInputValue38] = useState('');
    

  return (
    <>
      {/* <h2 className="text-center">PTT GLOBAL</h2> */}

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
               <input type="text" className={`form-control ${inputValue === '' ? 'is-invalid' : ''}`} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </div>
          </div>
          

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Fash point</div>
            </div>
            <div className="col-md-4 input-text">
               <input type="text" className={`form-control ${inputValue1 === '' ? 'is-invalid' : ''}`} value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Feezing point</div>
            </div>
            <div className="col-md-4 input-text">
                <input type="text" className={`form-control ${inputValue2 === '' ? 'is-invalid' : ''}`} value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Sulphur</div>
            </div>
            <div className="col-md-4 input-text">
               <input type="text" className={`form-control ${inputValue3 === '' ? 'is-invalid' : ''}`} value={inputValue3} onChange={(e) => setInputValue3(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Density @15˚C </div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue4 === '' ? 'is-invalid' : ''}`} value={inputValue4} onChange={(e) => setInputValue4(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Visual Color</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue5 === '' ? 'is-invalid' : ''}`} value={inputValue5} onChange={(e) => setInputValue5(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Corrosion</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue6 === '' ? 'is-invalid' : ''}`} value={inputValue6} onChange={(e) => setInputValue6(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Dis 10% </div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue7 === '' ? 'is-invalid' : ''}`} value={inputValue7} onChange={(e) => setInputValue7(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">A Dis 50%</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue8 === '' ? 'is-invalid' : ''}`} value={inputValue8} onChange={(e) => setInputValue8(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Dis 90% </div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue9 === '' ? 'is-invalid' : ''}`} value={inputValue9} onChange={(e) => setInputValue9(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">End point</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue10 === '' ? 'is-invalid' : ''}`} value={inputValue10} onChange={(e) => setInputValue10(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Residue </div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue11 === '' ? 'is-invalid' : ''}`} value={inputValue11} onChange={(e) => setInputValue11(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Existent Gum </div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue12 === '' ? 'is-invalid' : ''}`} value={inputValue12} onChange={(e) => setInputValue12(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Filter</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue13 === '' ? 'is-invalid' : ''}`} value={inputValue13} onChange={(e) => setInputValue13(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Viscosity </div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue14 === '' ? 'is-invalid' : ''}`} value={inputValue14} onChange={(e) => setInputValue14(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Specific Energy</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue15 === '' ? 'is-invalid' : ''}`} value={inputValue15} onChange={(e) => setInputValue15(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">EC Conduct</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue16 === '' ? 'is-invalid' : ''}`} value={inputValue16} onChange={(e) => setInputValue16(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Thermal</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue17 === '' ? 'is-invalid' : ''}`} value={inputValue17} onChange={(e) => setInputValue17(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Thermal Stability ( Control Temp )</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue18 === '' ? 'is-invalid' : ''}`} value={inputValue18} onChange={(e) => setInputValue18(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">MSEP ( Fuel With static )</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue19 === '' ? 'is-invalid' : ''}`} value={inputValue19} onChange={(e) => setInputValue19(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Aromatic</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue20 === '' ? 'is-invalid' : ''}`} value={inputValue20} onChange={(e) => setInputValue20(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Bocle</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue21 === '' ? 'is-invalid' : ''}`} value={inputValue21} onChange={(e) => setInputValue21(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Antioxidance </div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue22 === '' ? 'is-invalid' : ''}`} value={inputValue22} onChange={(e) => setInputValue22(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Metal First Dopping</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue23 === '' ? 'is-invalid' : ''}`} value={inputValue23} onChange={(e) => setInputValue23(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Metal Commulative</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue24 === '' ? 'is-invalid' : ''}`} value={inputValue24} onChange={(e) => setInputValue24(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Static Commulative</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue25 === '' ? 'is-invalid' : ''}`} value={inputValue25} onChange={(e) => setInputValue25(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">( Disillation ) loss % V/V</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue26 === '' ? 'is-invalid' : ''}`} value={inputValue26} onChange={(e) => setInputValue26(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Stadis-450</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue27 === '' ? 'is-invalid' : ''}`} value={inputValue27} onChange={(e) => setInputValue27(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Total Acid</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue28 === '' ? 'is-invalid' : ''}`} value={inputValue28} onChange={(e) => setInputValue28(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particulate Contamination</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue29 === '' ? 'is-invalid' : ''}`} value={inputValue29} onChange={(e) => setInputValue29(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Particula code{">"}=4um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue30 === '' ? 'is-invalid' : ''}`} value={inputValue30} onChange={(e) => setInputValue30(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particula code{">"}=6um </div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue31 === '' ? 'is-invalid' : ''}`} value={inputValue31} onChange={(e) => setInputValue31(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particula code{">"}=14um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue32 === '' ? 'is-invalid' : ''}`} value={inputValue32} onChange={(e) => setInputValue32(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particula code{">"}=21um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue33 === '' ? 'is-invalid' : ''}`} value={inputValue33} onChange={(e) => setInputValue33(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Particula code{">"}=25um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue34 === '' ? 'is-invalid' : ''}`} value={inputValue34} onChange={(e) => setInputValue34(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font"> Particula code{">"}=30um</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue35 === '' ? 'is-invalid' : ''}`} value={inputValue35} onChange={(e) => setInputValue35(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Fame</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue36 === '' ? 'is-invalid' : ''}`} value={inputValue36} onChange={(e) => setInputValue36(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">issue 33</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue37 === '' ? 'is-invalid' : ''}`} value={inputValue37} onChange={(e) => setInputValue37(e.target.value)} />
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
                  <div className="font">Remark</div>
            </div>
            <div className="col-md-4 input-text">
                  <input type="text" className={`form-control ${inputValue38 === '' ? 'is-invalid' : ''}`} value={inputValue38} onChange={(e) => setInputValue38(e.target.value)} />
            </div>
          </div>
        </div>
     </form>
   </>
  );
};
