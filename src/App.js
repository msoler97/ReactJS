import NavBar from "./components/NavBar/NavBar.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from "./context/CartContext.js"

import Home from "./views/Home/Home.js"
import Cart from "./views/Cart/Cart.js"
import Products from "./views/Products/Products.js"
import Details from "./views/Details/Details.js"

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/Cart" element={<Cart/>} />
          <Route path="/Details/:ItemId" element={<Details/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
