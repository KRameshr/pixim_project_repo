import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);

  // Only call runSearch if searchTerm is defined
  useEffect(() => {
    if (searchTerm) {
      runSearch(searchTerm);
    }
  }, [searchTerm, runSearch]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!images || images.length === 0) {
    return (
      <div className="text-center my-5">
        <h4>No images found{searchTerm ? ` for "${searchTerm}"` : ""}</h4>
        <p>Try searching for something else!</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {images.map(({ id, fullImageUrl, smallImageUrl, title }) => (
        <div key={id} className="col-sm-6 col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <a href={fullImageUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={smallImageUrl}
                className="card-img-top img-fluid"
                alt={title}
                style={{ height: "200px", objectFit: "cover" }}
              />
            </a>
            <div className="card-body">
              <p className="card-text text-truncate">{title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
