import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div className="bg-white dark:bg-black overflow-x-hidden text-black dark:text-white duration-200">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
