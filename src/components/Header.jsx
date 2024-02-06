import { useState } from "react";
import Form from "react-bootstrap/Form";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error uploading image", error);
      });
  };

  return (
    <form
      className="input-group"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <input
        type="file"
        name="file"
        className="form-control"
        accept="image/*"
        onChange={handleFileChange}
      />
      <input className="btn btn-primary px-2" type="submit" value="Save" />
    </form>
  );
}

function Header() {
  return (
    <>
      <div className="row bg-light pt-4 pb-4">
        <div className="d-flex">
          <div className="col-md-4 ">
            <Form.Select aria-label="Default" style={{ width: "250px" }}>
              <option>Componies </option>
              <option value="1">BSRC</option>
              <option value="2">KPAT</option>
              <option value="3">NFCT</option>
              <option value="4">PTTGC</option>
              <option value="5">PTTOR</option>
              <option value="6">SPRC</option>
              <option value="7">THAIOIL</option>
            </Form.Select>
          </div>
          <div className="col-md-4 text-center">
            <Form.Select aria-label="Default" style={{ width: "250px" }}>
              <option>Product </option>
              <option value="1">JET A-1</option>
              <option value="2">H-Base</option>
              <option value="3">GB1</option>
              <option value="4">GB2</option>
              <option value="5">ULG</option>
            </Form.Select>
          </div>
          <div className="col-md-4">
            <FileUpload />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
