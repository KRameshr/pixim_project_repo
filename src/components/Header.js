import React from "react";
import Form from "./Form";

const Header = ({ history, handleSubmit }) => {
  return (
    <header
      className="text-center py-5 mb-4"
      style={{
        backgroundColor: "#ffffff", // solid white background
        color: "#ff7f50", // orange text for contrast
      }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to Pixim-Photo</h1>
        <p className="lead fw-bold">
          Millions of high-quality stock images at your fingertips
        </p>

        <div className="mt-4">
          <Form history={history} handleSubmit={handleSubmit} />
        </div>
      </div>
    </header>
  );
};

export default Header;
