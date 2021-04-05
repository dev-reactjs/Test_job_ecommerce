import React, { useState, useEffect } from "react";
import "../Product/Product.css";
import CategoryBox from "../../component/Checkbox/Checkbox";
import {
  Layout,
  AutoComplete,
  Input,
  Carousel,
  Image,
  Typography,
  Button,
  Modal,
} from "antd";
import Card from "../../component/Card/Card";
import { useHistory } from "react-router-dom";
import {
  HomeFilled,
  GiftFilled,
  MailFilled,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  UserOutlined,
  LoginOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const item4 = [
  {
    image: [
      {
        item: "/assets/realmec11.jpeg",
      },
      {
        item: "/assets/realme1.jpeg",
      },
      {
        item: "/assets/realme2.jpeg",
      },
    ],
    price: 14999,
    productName: "Rich Green Blue(Rich Green,64 Gb)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Electronics",
    brand: "Realme",
    rate: 5,
    id: 1,
  },
  {
    image: [
      {
        item: "/assets/jeans.jpeg",
      },
      {
        item: "/assets/jeans1.jpeg",
      },
      {
        item: "/assets/jeans3.jpeg",
      },
    ],
    price: 1999,
    productName: "Jeans(Highlander)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Clothes",
    brand: "Highlander",
    rate: 4,
    id: 2,
  },
  {
    image: [
      {
        item: "/assets/oil.jpeg",
      },
      {
        item: "/assets/oil1.jpeg",
      },
      {
        item: "/assets/oil2.jpeg",
      },
    ],
    price: 750,
    productName: "Fortuner oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Grocery",
    brand: "Fortuner",
    rate: 5,
    id: 3,
  },
  {
    image: [
      {
        item: "/assets/samsung1.jpeg",
      },
      {
        item: "/assets/samsung2.jpeg",
      },
      {
        item: "/assets/samsung3.jpeg",
      },
    ],
    price: 24999,
    productName: "Samsung Refrigator(415 L)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Electronics",
    brand: "Samsung",
    rate: 5,
    id: 4,
  },
  {
    image: [
      {
        item: "/assets/shirt.jpeg",
      },
      {
        item: "/assets/shirt1.jpeg",
      },
      {
        item: "/assets/shirt2.jpeg",
      },
    ],
    price: 1499,
    productName: "Shirt(Peter England)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Clothes",
    brand: "Peter England",
    rate: 5,
    id: 5,
  },
  {
    image: [
      {
        item: "/assets/atta1.jpeg",
      },
      {
        item: "/assets/atta2.jpeg",
      },
      {
        item: "/assets/atta3.jpeg",
      },
    ],
    price: 499,
    productName: "Ashirvad Atta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Grocery",
    brand: "Ashirvad",
    rate: 4.5,
    id: 6,
  },
  {
    image: [
      {
        item: "/assets/tshirt2.jpeg",
      },
      {
        item: "/assets/tshirt3.jpeg",
      },
      {
        item: "/assets/tshirt1.jpeg",
      },
    ],
    price: 999,
    productName: "tShirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Clothes",
    brand: "tshirt",
    rate: 3,
    id: 7,
  },
];

function Product(props) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(item4);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  const history = useHistory();
  const itemCategory = [
    {
      item: "Grocery",
    },
    {
      item: "Clothes",
    },
    {
      item: "Electronics",
    },
  ];
  // brandCategory.1 = null
  const brandCategory = [
    {
      item: "Samsung",
    },
    {
      item: "Realme",
    },
    {
      item: "Highlander",
    },
    {
      item: "Fortuner",
    },
    {
      item: "Peter England",
    },
  ];
  const priceCategory = [
    {
      item: "0 to 999",
    },
    {
      item: "1000 to 9999",
    },
    {
      item: "9999 to 29999",
    },
  ];
  let temp = localStorage.getItem("addItem");
  let temp1 = JSON.parse(temp);
  useEffect(() => {
    data.push(temp1);
    console.log("aaaaaaaa", data);
  }, [temp1]);

  const searchFilter = (event) => {
    if (event.target.value == "") {
      setData(item4);
    } else {
      const temp = item4.filter((value) =>
        value.productName
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      );
      setData(temp);
    }
    setSearch(event.target.value);
  };
  function onChangeCategory(value) {
    if (value.length == 0) {
      setData(item4);
    } else {
      let temp1 = [];
      value.map((item1) => {
        const temp = item4.filter(
          (item) =>
            item.category && item.category.toLowerCase() == item1.toLowerCase()
        );
        let temp2 = temp1.concat(temp);
        temp1 = temp2;
      });
      setData(temp1);
    }
    setCategory(value);
  }
  function onChangeBrand(value) {
    if (value.length == 0) {
      setData(item4);
    } else {
      let temp1 = [];
      value.map((item1) => {
        const temp = item4.filter(
          (item) => item.brand && item.brand.toLowerCase() == item1.toLowerCase()
        );
        let temp2 = temp1.concat(temp);
        temp1 = temp2;
      });
      setData(temp1);
    }
    setBrand(value);
  }
  function onChangePrice(value) {
    if (value.length == 0) {
      setData(item4);
    } else {
      let temp1 = [];
      value.map((item1) => {
        const x = item1.split(" ");
        const min = x[0];
        const max = x[2];
        const temp = item4.filter(
          (item) =>item.price && item.price <= max && item.price > min
        );
        let temp2 = temp1.concat(temp);
        temp1 = temp2;
      });
      setData(temp1);
    }
    setPrice(value);
  }
  const Logout = () => {
    localStorage.setItem("loggedInUser", null);
    history.push("/");
  };

  const addCart = (item) => {
    let temp = localStorage.getItem("cart");
    let cartItems = JSON.parse(temp);
    let newItems = [item];
    let temp2 = newItems.concat(
      cartItems.filter((item) => newItems.indexOf(item) < 0)
    );
    cartItems = temp2;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCart(cartItems);
    //setCart(cart + 1);
  };

  const delToCart = (index) => {
    let temp = localStorage.getItem("cart");
    let cartItems = JSON.parse(temp);
    cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCart(cartItems);
    // if (cart !== 0) {
    //   setCart(cart - 1);
    // }
  };

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
      <div className="main">
        <Header className="header">
          <MenuOutlined className="menu_icon " />
          <Input.Group className="serachbar">
            <Input
              className="input"
              size="large"
              value={search}
              placeholder="Search product  Name..."
              prefix={<SearchOutlined style={{ fontSize: 20 }} />}
              onChange={(event) => searchFilter(event)}
            />
          </Input.Group>
          <Title
            className="addproduct"
            onClick={() => history.push("Home")}
            level={5}
          >
            Add Product
          </Title>
          <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <div className="modal">
              <Title level={3}>
                {" "}
                <tr>
                  <th>Product Name</th>
                  <th>Product Price</th>
                </tr>
                {cart.map((item, index) => {
                  return (
                    <div style={{ display: "flex" }}>
                      <td>{item.productName}</td>
                      <td>{item.price}</td>
                      <DeleteOutlined
                        onClick={() => delToCart(index)}
                        class
                        Name="delete_Icon"
                      />
                    </div>
                  );
                })}
              </Title>
            </div>
          </Modal>
          <ShoppingCartOutlined onClick={showModal} className="menu_icon " />
          <Button
            className="button_Circle"
            size="small"
            type="primary"
            shape="circle"
          ></Button>
          <UserOutlined className="menu_icon " />
          <LoginOutlined onClick={() => Logout()} className="menu_icon" />
        </Header>
        <Layout>
          <Sider className="sider ant-layout-sider">
            <HomeFilled className="icon  iconPosition" />
            <GiftFilled className="icon  iconPosition" />
            <MailFilled className="icon  iconPosition" />
          </Sider>
          <Content style={{ display: "flex" }}>
            <div className="categoryContent">
              <Title className="category" style={{ color: "green" }} level={5}>
                Category
              </Title>
              <CategoryBox onChange={onChangeCategory} item1={itemCategory} />
              <Title className="category" style={{ color: "green" }} level={5}>
                Brand
              </Title>
              <CategoryBox onChange={onChangeBrand} item1={brandCategory} />
              <Title className="category" style={{ color: "green" }} level={5}>
                Price
              </Title>
              <CategoryBox onChange={onChangePrice} item1={priceCategory} />
            </div>
            <div className="productContent">
              <Carousel autoplay>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul6.jpeg"}
                    width="100%"
                  />
                </div>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul5.jpeg"}
                    width="100%"
                  />
                </div>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul2.jpeg"}
                    width="100%"
                  />
                </div>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul7.jpeg"}
                    width="100%"
                  />
                </div>
              </Carousel>
              <Content className="ContentCard">
                <Card onClick={(item) => addCart(item)} item1={data} />
              </Content>
            </div>
          </Content>
        </Layout>
      </div>
    </>
  );
}
export default Product;
