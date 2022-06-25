import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,LOGOUT } from "./action.type.js";
import {loadData, saveData } from "../localStorage/localStorage";
const initalState = {
  token: loadData("token") || 0,
  isLogin: loadData("isLogin"),
  isLoading: false,
  isError: false,
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isLogin:false,
      };
    case LOGIN_SUCCESS:
      saveData("token",payload);
      saveData("isLogin",true);
      return {
        ...state,
        token: payload,
        isLogin:true,
        isLoading: false,
        isError: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isLogin:false,
      };

      case LOGOUT:
        saveData("token","");
        saveData("isLogin",false);
      return {
        ...state,
        token: "",
        isLogin:false,
        isLoading: false,
        isError: false,
      
      };

    default:
      return state;
  }
};
