import React from "react";
import "./../Checkbox/Checkbox.css";
import { Checkbox } from "antd";

const CategoryBox = ({ item1,onChange}) => {
  return (
    <div>
      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
      {item1.map((item, index) => (
        <Checkbox className="checkbox" level={2} 
        value={item.item}   >
          {item.item}
        </Checkbox>
      ))}
     </Checkbox.Group>
    </div>
  );
};
export default CategoryBox;
