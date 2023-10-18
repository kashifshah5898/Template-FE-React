import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h1>Page Not Found</h1>
      <Link to={"/"} className="mt-4">
        <Button variant="contained"> Home Page</Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
