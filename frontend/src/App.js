import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateProduct from './pages/admin/CreateProduct';
import ListProduct from './pages/admin/ListProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import SignIn from './pages/SignIn';
import AdminRoute from './components/AdminRoute';
import UserProfile from './pages/admin/UserProfile';
import UserRoute from './components/UserRoute';





const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/product/create" element={<AdminRoute><CreateProduct /></AdminRoute>} />
          <Route path="/admin/products" element={<AdminRoute><ListProduct /></AdminRoute>} />
          <Route path="/admin/edit/product/:productId" element={<AdminRoute><UpdateProduct /></AdminRoute>} />
          <Route path="/user/signin" element={<SignIn />} />
          <Route path="/user/profile" element={<UserRoute><UserProfile /></UserRoute>} />
          {/* <Route path="/user/profile" element={<UserProfile />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App