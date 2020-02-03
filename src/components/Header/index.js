import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <h1 className="header text-center"> Employee Directory</h1>
        <h3 className="text-center">Search by name(lower case) or Filter the names in ascending or descending order!</h3>
    </div>
  );
}

export default Header;
