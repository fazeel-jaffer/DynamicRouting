import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Contact = () => {

    return(
      <>
      <div>Contact us</div>
       <Link to="mobile">Mobile</Link>
       <Link to="email">Email</Link>
       <Outlet/>
      </>
    )
  };  
export default Contact;