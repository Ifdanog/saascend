import React from "react";

const Button = ({ text, onClick, type = "button", style = {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...styles.button, ...style }}
    >
      {text}
    </button>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Button;
