import React from 'react'
import {Link} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {logout} from "../../Auth/action.js";
const Navbar = () => {
  const {isLogin}=useSelector((state=>state.authReducer))
 const dispatch=useDispatch();
const handle=(payload)=>{
  dispatch(logout(payload))
}
  return (
    <div >
         <Link to="/total" style={{padding:"12px"}}>Total</Link>
         {isLogin ? <Link to="" onClick={handle}>Logout</Link>:  <Link to="/login">Login</Link>}
        
    </div>
  )
}

export default Navbar