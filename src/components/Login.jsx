import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginRequest, loginSussess, loginFailure } from "../Auth/action.js";
import { useDispatch,useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const {isLogin,isLoading}=useSelector((state=>state.authReducer))

  const users = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const handleAuth = (payload) => {
    dispatch(loginRequest(payload));
    axios
      .post("https://reqres.in/api/login", users)
      .then((res) => dispatch(loginSussess(res.data.token)))
      .catch((err) => dispatch(loginFailure(err)));
  };
  const handhe = () => {};
  if(isLogin){
    navigate("/")
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={users.email}
        onChange={(e) => handhe(e.target.value)}
      />{" "}
      <br />
      <input
        type="password"
        value={users.password}
        onChange={(e) => handhe(e.target.value)}
      />{" "}
      <br />
      {isLoading ? "Please Wait Checking Credentials...":  <button onClick={handleAuth}>Login</button>}
     
    </div>
  );
};

export default Login;
