import React from "react";
import Container from "./Container";

const Search = ({ searchTerm }) => {
  return (
    <div className="mb-5">
      <h2 className="fw-bold mb-4">{searchTerm} Images</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
