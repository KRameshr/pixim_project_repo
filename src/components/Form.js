import React, { useState } from "react";

const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");

  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };

  return (
    <form
      className="d-flex justify-content-center mb-4"
      onSubmit={(e) => handleSubmit(e, history, searchEntry)}
    >
      <input
        type="text"
        style={{ maxWidth: "500px", height: "3rem" }}
        className="animated-input form-control me-2"
        name="search"
        placeholder="Search images..."
        onChange={updateSearchInput}
        value={searchEntry}
        required
      />
      <button
        type="submit"
        className="btn btn-warning btn-sm"
        disabled={!searchEntry.trim()}
      >
        Search
      </button>
    </form>
  );
};

export default Form;
