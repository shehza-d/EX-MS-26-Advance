import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from './components/NavBar'
// import Footer from './component/Footer'

const Layout = () => {

 


  return (
    <>
      <Navbar/>
      <Outlet />
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
