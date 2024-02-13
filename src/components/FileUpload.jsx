import React, { useState } from "react";

export function FileUpload() {
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

    // ส่งข้อมูลไปที่ backend
    fetch("http://localhost:18000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'สำเร็จ');
        console.log(data.img_list);

        // นำค่า Imglist ที่ได้จาก backend ไป set ให้กับ state ใน Pdfview
        // setImglist(data.img_list);
      })
      .catch((error) => {
        console.error("Error uploading image", error);
      });
  };

  return (
    <>
      <form
        className="input-group"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="file"
          className="form-control"
          accept="*"
          onChange={handleFileChange}
        />
        <input className="btn btn-primary px-2" type="submit" value="Save" />
      </form>
    </>
  );
}
