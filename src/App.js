import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <header>
        <MainHeader></MainHeader>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome"/>} />
          <Route path="/welcome/*" element={<Welcome/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/products/:productId" element={<ProductDetail/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
