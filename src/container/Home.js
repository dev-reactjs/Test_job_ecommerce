import React,{useState} from "react";
import "./../container/Home.css";
import InputField from "./../component/Input/InputField";
import ButtonComponent from "./../component/Button/Button"
import { Typography, Form } from "antd";
import { useHistory } from "react-router-dom";
import { stat } from "fs";
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
function Home() {
  const { Title } = Typography;
  const history = useHistory();
  const [state, setState] = useState({
    image:"",
    id: "",
    description: "",
    pQuantity: "",
    price: "", 
  });
  // const [error, setError] = useState({
  //   id: "",
  //   description: "",
  //   pquantity: "",
  //   price: "", 
  // });
  const onChangeValue = (e, text) => {
    setState({ ...state, [text]: e.target.value });
  };
   const onSubmit = () => {
     let addItem = {
       image: [
        {
          item: image,
        }
      ],
      id:id,
      description: description,
      pQuantity:pQuantity,
      price:price, 
     }
    if(image != ''){
  if (id != '') {
    if(description != '')  {
      if(pQuantity != '') {
        if(price != ''){
    let data = [];
    data = localStorage.setItem("addItem",JSON.stringify(addItem))
    console.log("aaaaaaaa",data)
    history.push("/Product");
  }
  else {
    alert('please fill price')
  }
}
  else {
    alert('please fill  Product Quantity')
  }
}
else {
  alert('please fill  Description')
}
} 
else {
  alert('please fill  Id')
}
}
else {
  alert('please fill  image')
}
}

     const {id,description,pQuantity,price,image} = state       
  return (
    <div className="main">
        <div className="productadd">
      <Title level={3}>New Product Added</Title>
      <Form>
      <InputField
          id="photo"
          type="file"
          multiple="true"
          name="productImages"
          placeholder="Please Enter your Product Images"
          label="Product Images"
          onChange={(e) => onChangeValue(e, "image")}
        />
        <InputField
          type="number"
          placeholder="Please Enter your Product Id"
          label="Product Id"
          onChange={(e) => onChangeValue(e, "id")}
        />
         <InputField
          type="text"
          placeholder="Please Enter your Product Description"
          label="Product Desc"
          onChange={(e) => onChangeValue(e, "description")}
        />
        <InputField
          type="number"
          placeholder="Please Enter your Quantity"
          label="Product Quantity"
          onChange={(e) => onChangeValue(e, "pQuantity")}
        />
         <InputField
          type="number"
          placeholder="Please Enter your Product price"
          label="Product price"
          onChange={(e) => onChangeValue(e, "price")}
        />
         <ButtonComponent
         onClick={() => onSubmit()}
         Button="Add new product"
         className="yellow_btn"
         />
      </Form>
      </div>
    </div>
  );
}
export default Home;
