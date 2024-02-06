import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Cropper from "react-cropper";
import Button from "react-bootstrap/Button";
import "cropperjs/dist/cropper.css";
import "react-toastify/dist/ReactToastify.css";


const Pdfview = () => {
    const cropperRef = useRef(null);
    // const [croppedImageData, setCroppedImageData] = useState(null);

    // แจ้งเตือนการ Fetch Api
    
    const resolveAfter = () => {
        const fetchApi = fetch('https://jsonplaceholder.typicode.com/posts')

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
    // จบแจ้งเตือน

    // Crop
    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;
        const imageData = cropper.getCroppedCanvas().toDataURL();
        // setCroppedImageData(imageData);

        // ทำการส่งข้อมูลภาพที่ถูก crop ไปยัง URL /upload
        uploadCroppedImage(imageData);
    };

    const uploadCroppedImage = (imageData) => {
        fetch("http://127.0.0.1:5000/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ image: imageData }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("รับข้อมูลจาก /upload:", data);
            })
            .catch((error) => {
                console.error("เกิดข้อผิดพลาดในการส่งข้อมูล:", error);
            });
    };

    return (
        <>
            <Cropper
                src="../img/BSRC_GB2.jpg"
                style={{ height: "600px", width: "100%" }}
                initialAspectRatio={16 / 9}
                guides={false}
                ref={cropperRef}
            />
            <ToastContainer position="top-left" />
            <Button
                variant="outline-primary"
                className="mt-3 w-100"
                onClick={() => {
                    onCrop();
                    resolveAfter();
                }}
            >
                ประมวลผล
            </Button>
            {/* {croppedImageData && <img src={croppedImageData} alt="Cropped Image" />} */}
        </>
    );
};

export default Pdfview;
