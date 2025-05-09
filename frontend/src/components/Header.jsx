import React from 'react';
import { Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <h2>DocuScan</h2>
          </div>

          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Главная</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/scan">Сканировать</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/history">История</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">О проекте</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
