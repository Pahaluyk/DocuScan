const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 border-top">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase">DocuScan</h5>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-end">
            <h5 className="text-uppercase">Ссылки</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="text-dark">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-light border-top">
        <small>DocuScan &mdash; Сделано с ❤️ для пользователей</small>
      </div>
    </footer>
  );
};

export default Footer;
