import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageComponent = ({ imageData }) => {
  return (
    <div>
      <img src={`data:image/png;base64,${imageData}`} alt="React Image" />
    </div>
  );
};

const FetchImg = () => {
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    // โหลดข้อมูลภาพจาก Flask
    axios.get('http://localhost:5000/get_image')
      .then(response => {
        console.log('Response from Flask:', response.data); // ล็อกค่าที่ได้รับ
        setImageData(response.data.imageData);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
  }, []);

  return (
    <div>
      <ImageComponent imageData={imageData} />
    </div>
  );
};

export default FetchImg;