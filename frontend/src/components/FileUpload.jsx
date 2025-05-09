import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const FileUpload = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [originalImageUrl, setOriginalImageUrl] = useState('');

  const handleFileUpload = async (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);

    try {
      const response = await axios.post('http://localhost:5000/api/scan', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data && response.data.scanned_image_url) {
        setOriginalImageUrl(URL.createObjectURL(event.target.files[0]));
        setImageUrl(response.data.scanned_image_url); 
      } else {
        alert("Ошибка: Сканированное изображение не получено");
      }
    } catch (error) {
      alert("Ошибка при загрузке файла.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 text-center">
          <h2 className="mb-4">Загрузите файл для сканирования</h2>

          <div className="mb-4">
            <input 
              type="file" 
              onChange={handleFileUpload} 
              className="form-control" 
              accept="image/*" 
            />
          </div>

          <div className="row">
            {originalImageUrl && (
              <div className="col-md-5">
                <h4>Оригинал:</h4>
                <img
                  src={originalImageUrl}
                  alt="Original document"
                  className="img-fluid border rounded"
                />
              </div>
            )}

            {imageUrl && (
              <div className="col-md-5 offset-md-2">
                <h4>Результат сканирования:</h4>
                <img
                  src={`http://localhost:5000${imageUrl}`}
                  alt="Scanned document"
                  className="img-fluid border rounded"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
