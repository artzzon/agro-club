import "./App.scss";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      <Header />
      <Filter />
      <Products />
    </div>
  );
}

export default App;
