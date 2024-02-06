import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Cropper from "react-cropper";
import Button from "react-bootstrap/Button";
import "cropperjs/dist/cropper.css";
import "react-toastify/dist/ReactToastify.css";

const Pdfview = () => {
  const cropperRef = useRef(null);
  const [file, setFile] = useState(null);


  // แจ้งเตือนการ Fetch Api
  const resolveAfter = () => {
    const fetchApi = fetch("https://jsonplaceholder.typicode.com/posts");

    toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          const response = await fetchApi;
          const data = await response.json();

          // ทำการใช้ข้อมูลที่ได้จากการ fetch API ได้ตรงนี้
          console.log("ข้อมูลจาก fetch API:", data);

          setTimeout(() => {
            resolve();
          }, 2000);
        } catch (error) {
          reject(error);
        }
      }),
      {
        pending: "กำลังประมวลผล",
        success: "สำเร็จ",
        error: "เกิดข้อผิดพลาด",
      },
      {}
    );
  };
  // จบการแจ้งเตือน


  //   Zoom

  const zoomIn = () => {
    cropperRef.current?.cropper.zoom(0.1);
  };
  const zoomOut = () => {
    cropperRef.current?.cropper.zoom(-0.1);
  };

  //End Zoom


  // Crop

  const onCrop = () => {
    const cropper = cropperRef.current?.cropper;
    const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();

    // Convert the cropped canvas to a data URL with the desired format (in this case, image/png)
    const croppedImageData = croppedCanvas.toDataURL("image/png");

    // Convert the data URL to a Blob
    const blob = dataURItoBlob(croppedImageData);

    // Convert the Blob to a File with the desired file name and type
    const croppedFile = new File([blob], "cropped-image.png", { type: "image/png" });

    setFile(croppedFile);
  };

  const handleFileChange = (e) => {
    // Get the selected file from the input field
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();

    if (file) {
      // If you want to upload the file to the server, you can use FormData and fetch
      const formData = new FormData();
      formData.append("file", file);

      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      })
        .then(response => response.text())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error("Error uploading image", error);
        });
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  };

  return (
    <>
      <Cropper
        src="../img/BSRC_GB2.jpg"
        style={{ height: "600px", width: "100%" }}
        initialAspectRatio={16/9}
        guides={false}
        ref={cropperRef}
      />
      <ToastContainer position="top-left" />
      <div className="d-flex">
        <div className="d-flex">
        <Button
          variant="btn btn-primary"
          className="mt-3 me-2 w-100"
          onClick={() => {
            zoomIn();
          }}
        >
          <i className="bi bi-zoom-in"></i>
        </Button>
        <Button
          variant="btn btn-primary"
          className="mt-3 me-2 w-100"
          onClick={() => {
            zoomOut();
          }}
        >
          <i className="bi bi-zoom-out"></i>
        </Button>
        </div>
  
        <form onSubmit={handleFileUpload}>
        <input type="hidden" name="file" accept="image/*" onChange={handleFileChange} />
        {/* <input type="submit" value="Upload" onClick={onCrop}/> */}
        <Button
          variant="btn btn-primary"
          className="mt-3  w-100"
          onClick={() => {
            onCrop();
            resolveAfter();
          }}
          type="submit"
          value="Upload"
        >
          ประมวลผล
        </Button>
      </form>
      </div>
     
    </>
  );
};

export default Pdfview;
