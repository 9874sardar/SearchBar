import React from "react";
import "./SearchResult.css";

import SearchResultList from "./SearchResultList";

const SearchResult = (props) => {
  return (
    <div className="resultList">
      {props.results.map((result, id) => {
        return <SearchResultList key={id} result={result} />
      })}
    </div>
  );
};

export default SearchResult;
