import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <div>
        <h1>Page Not Found!</h1>
        <Link to="/">
          <button className="btn-primary btn">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
