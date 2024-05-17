import React from "react";
import Input from "./Input";

const Root = () => {
  return (
    <form className="form-container">
      Введенное значение: {value}
      <Input onChange={handleChange} />
    </form>
  );
};

export default Root;
