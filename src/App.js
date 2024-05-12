import logo from "./logo.svg";
import "./App.css";
import Title from "./component/Title";
import Imageee from "./component/Imageee";
import products from "./products";
import Product from "./component/product";

const pArray = products.map((pro) => {
  return <Product imgSo={pro.image} priceSo={pro.Price} nameSo={pro.name} />;
});
function App() {
  return (
    <div className="App">
      <Title />
      <Imageee />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {pArray}
      </div>
    </div>
  );
}

export default App;
