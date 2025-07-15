import "./App.css";
import AllProduct from "./pages/AllProduct";
import AddCart from "./pages/addcard";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<AllProduct />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<AddCart />}></Route>
      </Routes>
    </>
  );
}

export default App;
