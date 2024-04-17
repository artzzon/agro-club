import React from "react";

import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

import "./styles/App.scss";

export const CategoryContext = React.createContext({});
function App() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  return (
    <>
      <CategoryContext.Provider
        value={{
          activeCategory,
          setActiveCategory,
        }}
      >
        <Header />
        <Filter />
        <Products />
      </CategoryContext.Provider>
    </>
  );
}

export default App;
