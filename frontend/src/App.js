import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateProduct from './pages/admin/CreateProduct';
import ListProduct from './pages/admin/ListProduct';
import UpdateProduct from './pages/admin/UpdateProduct';



const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/product/create" element={<CreateProduct />} />
          <Route path="/admin/products" element={<ListProduct />} />
          <Route path="/admin/edit/product/:productId" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App