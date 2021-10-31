import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";
const NotFound = () => {
  return (
    <div className=" notfound">
      <h1>Page is not Found:404 error</h1>
      <Link to="/home">
       
        <button type="button" className="btn btn-warning">Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
