import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <h1>О проекте</h1>
      <p className="about-text">
        Документный сканер — это инструмент, предназначенный для упрощения процесса сканирования
        и обработки документов. В системе пользователи могут быстро загружать изображения
        документов и получать их предварительный просмотр. Сервич стремится улучшить взаимодействие
        с документами, облегчить работу с ними и повысить продуктивность.
      </p>
      <p className="about-text">
        Проект использует передовые технологии машинного обучения для улучшения качества сканирования,
        а также предоставляет удобный интерфейс для пользователя. Мы верим, что с помощью этой
        платформы вы сможете сэкономить время и сделать работу с документами проще.
      </p>
    </div>
  );
}

export default About;
