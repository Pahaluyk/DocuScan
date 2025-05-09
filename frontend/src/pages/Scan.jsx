import React, { useState } from 'react';
import FileUpload from '../components/FileUpload'; 

const Scan = () => {
  const [result, setResult] = useState(null); 
  const [error, setError] = useState(null); 


  const handleResult = (data) => {
    setResult(data); 
    setError(null); 
  };

  const handleError = (errMsg) => {
    setError(errMsg); 
    setResult(null); 
  };

  return (
    <div>
      <h1>Сканирование документа</h1>

      <FileUpload onResult={handleResult} onError={handleError} />

      {error && <div className="error">{error}</div>}

      {result && (
        <div className="result">
          <h2>Результат обработки:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Scan;
