import React from "react";
import { Link } from "react-router-dom";

function Test() {
  React.useEffect(() => {
    console.log("Running");
    return () => {
      console.log("I am running");
    };
  }, []);
  return (
    <div>
      <div>Test</div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Test;
