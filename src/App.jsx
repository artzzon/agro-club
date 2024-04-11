import "./styles/App.scss";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <Filter />
      <Products />
    </>
  );
}

export default App;
