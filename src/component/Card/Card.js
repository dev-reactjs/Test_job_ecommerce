import React, { useState } from "react";
import "./../Card/Card.css";
import {
  Carousel,
  Image,
  Title,
  Button,
  Rate,
  Modal,
  Descriptions,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { wrap } from "module";

const Card = ({ item1, onClick }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      {item1.map((y, id) => {
        return (
          <div
            style={{ borderWidth: 2, borderColor: "black" }}
            className="card"
          >
            <Carousel autoplay>
              {y.image && y.image.map((x, id) => {
                return (
                  <div> 
                    <Image className="carsoul" src={x.item} alt={("/assets/tshirt2.jpeg")} width="100%" />
                  </div>
                );
              })}
            </Carousel>
            <h3 className="productname">{y.id}</h3>
            <Modal
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div className="modal">
                <Descriptions
                  style={{ textAlign: "center" }}
                  title="Product Information"
                >
                  <div style={{ flexDirection: "column" }}>
                    <h5 className="description">{y.description}</h5>
                    <h3 className="productname" style={{ color: "blue" }}>
                      ${y.price}/price
                  </h3>
                  </div>
                </Descriptions>
              </div>
            </Modal>
            <h3 onClick={showModal} className="productname">
              {y.productName}
            </h3>
            <h3 className="productname" style={{ color: "blue" }}>
              ${y.price}/price{" "}
              <Button onClick={() => onClick(y)} className="cart_btn">
                <ShoppingCartOutlined />
              </Button>
            </h3>
            <p className="description">{y.description}</p>
            <Rate style={{ fontSize: 15 }} allowHalf defaultValue={y.rate} />
          </div>
        );
      })}
    </>
  );
};
export default Card;
