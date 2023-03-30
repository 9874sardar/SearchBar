import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
            return value && user && user.name && user.name.toLowerCase().includes(value)
        });
        props.setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="inputWrapper">
      <FaSearch id="search-icon" />
      <h1>{props.results}</h1>
      <input
        placeholder="Type to search ..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
