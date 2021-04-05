import React from "react";
import { Button } from "antd";
import "../Button/Button.css";
const ButtonComponent = (props) => {
  const { className, onClick } = props;
  return (
    <Button className={className} onClick={onClick}>
      {props.Button}
    </Button>
  );
};
export default ButtonComponent;
