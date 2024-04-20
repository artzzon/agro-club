import React from "react";

import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

import "./styles/App.scss";

export const FilterContext = React.createContext({});
export const SearchContext = React.createContext("");

function App() {
  const [activeCategory, setActiveCategory] = React.useState("all");
  const [activeStatus, setActiveStatus] = React.useState({
    isLimited: false,
    isNew: false,
  });
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <FilterContext.Provider
        value={{
          activeCategory,
          setActiveCategory,
          activeStatus,
          setActiveStatus,
        }}
      >
        <Header />
        <Filter />
        <Products />
      </FilterContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
