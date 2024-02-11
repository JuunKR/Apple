import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollSection0 from "../components/ScrollSection0";
import ScrollSection1 from "../components/ScrollSection1";
import ScrollSection2 from "../components/ScrollSection2";
import ScrollSection3 from "../components/ScrollSection3";
const Layout = () => {
  return (
    <>
      <Header></Header>
      <ScrollSection0 />
      <ScrollSection1 />
      <ScrollSection2 />
      <ScrollSection3 />
      <Footer></Footer>
    </>
  );
};

export default Layout;
