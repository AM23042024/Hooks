import React from "react";

const Input = ({ onChange }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-field"
        name="value"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
