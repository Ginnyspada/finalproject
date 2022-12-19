import React from "react";
import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();

  return (
    <div>
      <h2> 404: Page Not Found </h2>
      <p>
        {" "}
        Oops! The URL <code> {location.name}</code> was not found on this server
        . Try a different URL!
      </p>
    </div>
  );
}
