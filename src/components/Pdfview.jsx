import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Cropper from "react-cropper";
import Button from "react-bootstrap/Button";
import "cropperjs/dist/cropper.css";
import "react-toastify/dist/ReactToastify.css";

const Pdfview = () => {
  const cropperRef = useRef(null);
  const [file, setFile] = useState(null);
  const [imagesData, setImagesData] = useState([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(0);
  const [cropIndex, setCropIndex] = useState(0);

  // แจ้งเตือนการ Fetch Api หลังจากนำภาพไปประมวลผลเสร็จ
  // const resolveAfter = () => {
  //   const fetchApi = fetch("https://jsonplaceholder.typicode.com/posts/3");

  //   toast.promise(
  //     new Promise(async (resolve, reject) => {
  //       try {
  //         const response = await fetchApi;
  //         const data = await response.json();

  //         // ทำการใช้ข้อมูลที่ได้จากการ fetch API ได้ตรงนี้
  //         console.log("ทดสอบ fetch API:", data);

  //         setTimeout(() => {
  //           resolve();
  //         }, 2000);
  //       } catch (error) {
  //         reject(error);
  //       }
  //     }),
  //     {
  //       pending: "กำลังประมวลผล",
  //       success: "สำเร็จ",
  //       error: "เกิดข้อผิดพลาด",
  //     },
  //     {}
  //   );
  // };

  // แจ้งเตือนการ ส่ง  pdf chang to image
  const upload_img = () => {
    if (file) {
      const fetchApi = fetch("http://localhost:18000");
      toast.promise(
        new Promise(async (resolve, reject) => {
          try {
            const response = await fetchApi;
            const data = await response.json();

            // ทำการใช้ข้อมูลที่ได้จากการ fetch API ได้ตรงนี้
            console.log("ทดสอบ fetch API:", data);

            setTimeout(() => {
              resolve();
            }, 1000);
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
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  /*handleSubmit form ส่ง pdf ไปแปลงเป็น image ที่ backend .. */

  const handleSubmit = (e) => {
    e.preventDefault();

    // เช็ค if ไม่มี file
    if (!file) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // ส่งข้อมูลไปที่ backend  รีเทิร์น img_list
    fetch("http://localhost:18000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "ข้อมูล");
        console.log(typeof(file));

        // นำค่า img_list ที่ server return กลับมา ไป set ให้กับ state imagesData
        setImagesData(data.img_list);
      })
      .catch((error) => {
        console.error("Error uploading image", error);
      });
  };

  const zoomIn = () => {
    cropperRef.current?.cropper.zoom(0.1);
  };

  const zoomOut = () => {
    cropperRef.current?.cropper.zoom(-0.1);
  };

  // Crop
  const onCrop = () => {
    const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
    // console.log("หลัง crop", croppedCanvas);
    const croppedImageData = croppedCanvas.toDataURL("image/png");
    const blob = dataURItoBlob(croppedImageData);

    const index = cropIndex + 1;
    const croppedFile = new File([blob], `temp_${index}.png`, {
      type: "image/png",
    });
    // console.log("ไฟล์ที่ถูก crop:", croppedFile);
    setFile(croppedFile);
    setCropIndex(cropIndex + 1);
  };

  // ส่งภาพครอบไป backend

  const handleFileUpload = (e) => {
    e.preventDefault();
  
    if (file) {
      const formData = new FormData();
      formData.append("files", file);
  
      const queryParams = new URLSearchParams();
      queryParams.append("supplier", "BSRC");
      queryParams.append("product", "GB2");
  
      fetch(`http://localhost:18000/ocr?${queryParams}`, {
        method: "POST",
        body: formData,
       
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "response");
          // Process the response data as needed
        })
        .catch((error) => {
          console.error("Error uploading image", error);
        });
    }
  };
  
  {
    /* แปลง url แปลงเป็น image */
  }
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
      {/* form ส่ง pdf ไปแปลงเป็น image ที่ backend .. */}
      <form
        className="input-group me-2 mb-3"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="filename"
          className="form-control"
          accept="*"
          onChange={handleFileChange}
        />
        <input
          className="btn btn-primary px-2"
          type="submit"
          value="Upload"
          onClick={() => {
            upload_img();
          }}
        />
      </form>
      {/* แสดงรูปภาพ */}
      <Cropper
        // src="/img/temp_img/temp_5.png"
        src={
          imagesData.length > 0 && imagesData[selectedFileIndex]
            ? `${imagesData[selectedFileIndex]}`
            : null
        }
        style={{ height: "600px", width: "100%" }}
        initialAspectRatio={16 / 9}
        guides={false}
        ref={cropperRef}
        autoCrop={false}
        // viewMode={3}
      />
      <ToastContainer position="top-left" /> {/* การแจ้งเตือน บน-ซ้ายs */}
      <div className="d-flex justify-content-center">
        <div className="d-flex">
          <Button
            className="mt-3 me-2 w-100"
            variant="btn btn-primary"
            onClick={() => {
              if (selectedFileIndex > 0) {
                setSelectedFileIndex(selectedFileIndex - 1);
              }
            }}
          >
            {/* previous */}
            <i className="bi bi-arrow-left-short"></i>
          </Button>
          <Button
            className="mt-3 me-2 w-100"
            variant="btn btn-primary"
            onClick={() => {
              if (selectedFileIndex < imagesData.length - 1) {
                setSelectedFileIndex(selectedFileIndex + 1);
              }
            }}
          >
            {/* next*/}
            <i className="bi bi-arrow-right-short"></i>
          </Button>

          {/* zoom */}
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

        {/* Form send Image crop to backend */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFileUpload(e);
          }}
          encType="multipart/form-data"
        >
          <input
            type="hidden"
            name="file"
            accept="*"
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              setFile(selectedFile);
            }}
          />
          <Button
            variant="btn btn-primary"
            className="mt-3 w-100"
            onClick={() => {
              onCrop();

              {
                /*ฟังชั่นแจ้งเตือนประมวลผล*/
              }
            }}
            type="submit"
          >
            ประมวลผล
          </Button>
        </form>
      </div>
    </>
  );
};

export default Pdfview;
