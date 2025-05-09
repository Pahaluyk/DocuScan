import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToScanner = () => {
    navigate('/scan');
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-dark text-white py-3">
        <div className="container">
          <h1 className="h3">DocuScan</h1>
        </div>
      </header>

      <main className="flex-grow-1 container text-center my-5">
        <h2 className="display-4 mb-4">Добро пожаловать в DocuScan</h2>
        <p className="lead mb-5">
          Загрузите фото документа и получите отсканированную версию с улучшенным качеством. Быстро и удобно прямо в браузере.
        </p>
        <button className="btn btn-primary btn-lg" onClick={goToScanner}>
          Перейти к сканированию
        </button>
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        &copy; 2025 DocuScan. Все права защищены.
      </footer>
    </div>
  );
};

export default Home;
