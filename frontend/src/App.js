import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateProduct from './pages/admin/CreateProduct';


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/product/create" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App