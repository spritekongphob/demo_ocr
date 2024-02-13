import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../css/textinput.css";
import "../css/Form.css";

export const FormComp = () => {
  //ตรวจสอบ input ถ้าไม่มีข้อมูลจะขึ้นเป็นกรอบสีแดง
  useEffect(() => {
    const inputElements = document.querySelectorAll(".form-control");

    const handleInputChange = (event) => {
      const inputElement = event.target;
      if (inputElement.value.trim() !== "") {
        inputElement.classList.remove("is-invalid");
      } else {
        inputElement.classList.add("is-invalid");
      }
    };

    // เมื่อมี input จะเรียกใช้ handleInputChange
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", handleInputChange);
    });
  }, []);

  const JET_A_1 = [
    "appearance",
    "flash_point",
    "freezeing_point",
    "sulphur",
    "density_at_15",
    "color",
    "corrosion",
    "dis_10",
    "dis_50",
    "dis_90",
    "end_point",
    "residue",
    "existent_gum",
    "filter",
    "viscosity",
    "smoke_point",
    "specific_energy",
    "ec_conduct",
    "thermal_stab",
    "msep",
    "aromatic",
    "bocle",
    "antioxidance",
    "metal_first",
    "metal_commu",
    "static_commu",
    "loss_per",
    "stadis_400",
    "total_acid",
    "particulate_conta",
    "particula_4",
    "particula_6",
    "particula_14",
    "particula_21",
    "particula_25",
    "particula_30",
  ];

  return (
    <>
      <div className="row d-flex justify-content-between mb-3">
        <div className="col-md-6">
          <Form.Select aria-label="Default">
            <option hidden>Company </option>
            <option value="1">BSRC</option>
            <option value="2">KPAT</option>
            <option value="3">NFCT</option>
            <option value="4">PTTGC</option>
            <option value="5">PTTOR</option>
            <option value="6">SPRC</option>
            <option value="7">THAIOIL</option>
          </Form.Select>
        </div>
        <div className="col-md-6">
          <Form.Select aria-label="Default">
            <option hidden>Product</option>
            <option value="1">JET A-1</option>
            <option value="2">H-Base</option>
            <option value="3">GB1</option>
            <option value="4">GB2</option>
            <option value="5">ULG</option>
          </Form.Select>
        </div>
      </div>

      <form className="form-horizontal border">
        <div className="container text-center sticky-top">
          <div className="row align-items-start header-table py-3">
            <div className="col-md-7 text-light">Property</div>
            <div className="col-md-5 text-light">Result</div>
          </div>
        </div>

        {/* <div className="row ps-4">
          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">fwfefewfe</label>
            </div>
            <div className="col-md-4 input-text  ">
              <input
                className="form-control is-invalid"
                id="appearance"
                required
              ></input>
            </div>
          </div>
        </div> */}

        <div className="row ps-4 ">
          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Appearnce</label>
            </div>
            <div className="col-md-4 input-text  ">
              <input
                className="form-control is-invalid"
                id="appearance"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Flash Point</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="flash_point"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Freezing Point</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="freezeing_point"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Sulphur</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="sulphur"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Density @15˚C </label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="density_at_15"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Visual Color</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="color"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Corrosion</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="corrosion"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Dis 10% </label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="dis_10"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">A Dis 50%</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="dis_50"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Dis 90% </label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="dis_90"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">End point</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="end_point"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Residue </label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="residue"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property"> Existent Gum </label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="existent_gum"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Filter</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="filter"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Viscosity </label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="viscosity"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Smoke Point</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="smoke_point"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Specific Energy</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="specific_energy"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">EC Conduct</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="ec_conduct"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property"> Thermal</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="thermal_stab"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">MSEP</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="msep"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Aromatic</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="aromatic"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Bocle</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="bocle"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Antioxidance </label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="antioxidance"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Metal First Dopping</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="metal_first"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Metal Commulative</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="metal_commu"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Static Commulative</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="static_commu"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">( Disillation ) loss % V/V</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="loss_per"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Stadis-450</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="stadis_400"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Total Acid</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="total_acid"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Particulate Contamination</label>
            </div>
            <div className="col-md-4 input-text">
              <input
                className="form-control is-invalid"
                id="particulate_conta"
                required
              ></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property"> Particula code{">"}=4um</label>
            </div>
            <div className="col-md-4 input-text">
              <input className="form-control is-invalid" id="particula_4" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Particula code{">"}=6um </label>
            </div>
            <div className="col-md-4 input-text">
              <input className="form-control is-invalid" id="particula_6" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Particula code{">"}=14um</label>
            </div>
            <div className="col-md-4 input-text">
              <input className="form-control is-invalid" id="particula_14" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Particula code{">"}=21um</label>
            </div>
            <div className="col-md-4 input-text">
              <input className="form-control is-invalid" id="particula_21"  required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property">Particula code{">"}=25um</label>
            </div>
            <div className="col-md-4 input-text">
              <input className="form-control is-invalid" id="particula_25" required></input>
            </div>
          </div>

          <div className="row px-3 py-2">
            <div className="col-md-8 ">
              <label className="Property"> Particula code{">"}=30um</label>
            </div>
            <div className="col-md-4 input-text">
              <input className="form-control is-invalid" id="particula_30" required></input>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
