
import React from "react";
import Featured from "../../Components/featured/Featured";
import Navbar from "../../Components/Navbar/Navbar";
import List from "../../Components/list/List";
import "./Home.scss";
function Home() {
  return <div className="home">
      <Navbar/>
      <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      </div>;
}

export default Home;
