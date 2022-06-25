import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE,LOGOUT } from "./action.type.js";

export const loginRequest = (payload) => ({ type: LOGIN_REQUEST, payload });
export const loginSussess = (payload) => ({ type: LOGIN_SUCCESS, payload });
export const loginFailure = (payload) => ({ type: LOGIN_FAILURE, payload });

export const logout = (payload) => ({ type: LOGOUT, payload });

