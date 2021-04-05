import React from "react";
import { Input } from "antd";
import "../Input/InputField.css";

const InputField = (props) => {
  const { type, placeholder, value, onChange } = props;
  return (
    <div className="input_bottom">
      <label>
        {props.label}
        <strong style={{ color: "red" }}> *</strong>
      </label>
      <Input
        className=".input_Field" 
         type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
};
export default InputField;
