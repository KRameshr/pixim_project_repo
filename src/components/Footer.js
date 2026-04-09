import React from "react";

const Footer = () => {
  const links = ["home", "services", "about", "contact"];

  return (
    <footer
      className="text-white mt-5"
      style={{
        backgroundColor: "#000000", // black background
        borderTop: "4px solid #ff7f50", // orange accent line
      }}
    >
      <div className="container py-4">
        <div className="row">
          {/* About Section */}
          <div className="col-md-6 mb-3 mb-md-0 text-center text-md-start">
            <h5 className="fw-bold text-warning">Pixim-Photo</h5>
            <p className="mb-0 text-white-50">
              Your source for high-quality images and professional services.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-6 text-center text-md-end">
            <h6 className="fw-bold text-warning mb-2">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              {links.map((item) => (
                <li key={item} className="d-inline-block me-3">
                  <a
                    href={`/`}
                    className="text-white text-decoration-none fw-bold"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p className="mb-0 text-white-50">
            © 2025 Pixim-Photo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
