import React, { useEffect, useState } from "react";
import InputField from "../../component/Input/InputField";
import ButtonComponent from "./../../component/Button/Button";
import "./../Login/Login.css";
import { Typography, Form, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
function Login(props) {
  const history = useHistory();
  const { Title } = Typography;
  const [state, setState] = useState({
    email: "",
    password: "",
    checked: false,
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const onChangeValue = (e, target) => {
    setState({ ...state, [target]: e.target.value });
    validation();
  };
  const validation = () => {
    let error = {};
    if (!state.email) {
      error.email = "Email is required";
    } else if (!/^[^]+@[^]+\.[a-z]{2,3}$/.test(state.email)) {
      error.email = "Invalid email";
    }
    if (!state.password) {
      error.password = "Password is required";
    } else if (
      !/((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,12})/.test(state.password)
    ) {
      error.password = "Invalid password";
    }
    // else{
    //   return true
    // }
    setError(error);
  };
  const isRegistered = (data) => {
    let signedUpData = localStorage.getItem("registration")
    if (signedUpData == null) {
      return false
    } else {
      let userArr = JSON.parse(signedUpData);
      userArr.forEach(el => {
        if (el.email === data.email) {
          return data.password === el.password
        } else {
          return false
        }
      });
    }
  }

  const onSubmit = () => {
    let data = { email: state.email, password: state.password };
    if (email != '') {
      if (password != '') {
        console.log("checked => ", state.checked);
        localStorage.setItem("Remember", state.checked === true ? "1" : "0");
        let signedUpData = localStorage.getItem("registration")
        let userArr = JSON.parse(signedUpData);
        if (signedUpData == null) {
          alert('User not found')
        } else {
        userArr.forEach(el => {
          if (el.email === data.email) {
            if (data.password === el.password) {
              localStorage.setItem(
                "loggedInUser",
                JSON.stringify(data)
              );
              history.push("/Product");
            }
          } else {
            alert('Email or password is not correct')
          }
        });
      }}
      else {
        alert('please input password')
      }
    }
    else {
      alert('please input email')
    }
  };
  useEffect(() => {
    let remember = Boolean(+localStorage.getItem("Remember"));
    console.log("remember => ", remember);
    if (remember) {
      let loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser != null || loggedInUser != undefined) {
        let user = JSON.parse(loggedInUser);
        setState({
          ...state,
          email: user?.email,
          password: user?.password,
          checked: remember,
        });
      }
    }
  }, []);

  const onCheck = () => {
    //console.log('checked => ', state.checked)
    setState({ ...state, checked: !state.checked });
  };

  const { email, password } = state;
  return (
    <div className="main_class">
      <div className="loginBox">
        <div>
          <ButtonComponent
            className="default_btn"
            Button="Signup"
            onClick={() => history.push("/SignUp")}
          />
        </div>
        <div style={{ marginTop: 60 }}></div>
        <Title className="login" level={3}>
          Login
        </Title>
        <Form className="form">
          <InputField
            placeholder="Please Enter your Email"
            label="Email"
            value={email}
            onChange={(e) => onChangeValue(e, "email")}
          />
          {error.email && (
            <div style={{ color: "red" }}>
              <label>{error.email}</label>
            </div>
          )}
          <div>
            <InputField
              type="password"
              placeholder="Please Enter your password"
              label="Password"
              value={password}
              onChange={(e) => onChangeValue(e, "password")}
            />
            {error.password && (
              <div style={{ color: "red" }}>
                <label>{error.password}</label>
              </div>
            )}
          </div>
          <Checkbox
            checked={state.checked}
            onClick={() => onCheck()}
            className="checkBox"
          >
            Remember me
          </Checkbox>
          <ButtonComponent
            onClick={() => onSubmit()}
            Button="Login"
            className="yellow_btn"
          />
        </Form>
      </div>
    </div>
  );
}
export default Login;
