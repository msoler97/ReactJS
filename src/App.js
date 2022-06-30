import NavBar from "./components/NavBar/NavBar.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from "./context/CartContext.js"
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from "./views/Home/Home.js"
import Cart from "./views/Cart/Cart.js"
import Products from "./views/Products/Products.js"
import Details from "./views/Details/Details.js"
import Category from "./views/Category/Category.js"
import ".//styles/styles.css"

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/Cart" element={<Cart/>} />
          <Route exact path="/Details/:productId" element={<Details/>} />
          <Route exact path="/Category/:categoryId" element={<Category/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
