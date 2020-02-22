import React from "react";

import "./searchBox.style.css";

export const SearchBox = ({placeholder, handleChange}) => {//placeholder = props.placeholder, handleChange = props.handleChange
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange = {handleChange}
      // onChange={e => this.handleChange(e)}
    />
  );
};



