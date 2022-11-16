import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateProduct from './pages/admin/CreateProduct';
import ListProduct from './pages/admin/ListProduct';


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/product/create" element={<CreateProduct />} />
          <Route path="/admin/products" element={<ListProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App