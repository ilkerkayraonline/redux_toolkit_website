import React, { useState } from "react";
import SliderComp from "../components/Navbar/Home/SliderComp";
import Sorting from "../components/Navbar/Home/Sorting";
import Category from "../components/Navbar/Home/Category";
import Products from "../components/Navbar/Home/Products";

const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <SliderComp />
      <Sorting setSort = {setSort} />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category = {category} sort={sort}/>
      </div>
    </div>
  );
};

export default Home;
