import React from "react";
import Button from "../components/button";

const Portfolio = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Portfolio Page</h1>
      <Button text="Click Me" onClick={handleClick} />
    </div>
  );
};

export default Portfolio;
