import {
  Routes,
  Route,
  Link,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import logo from "../src/assets/logo.jpg";
import Login from "./pages/Login";
import { useState } from "react";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import AdminProducts from "./pages/AdminProducts";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import AdminOrders from "./pages/AdminOrders";
import LayoutWithSidebar from "./hoc/LayoutWithSidebar";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import Checkout from "./pages/Checkout";

function App() {
  const isAdmin = false;//usestate to check user roleis admin or not
  const [isAuthenticated, setIsAuthenticated] = useState("");// state to check user authenticate or not
  const navigate = useNavigate(); // ✅ Hook for navigation

  const location = useLocation();// hook to check url path
  const isAdminRoute = location.pathname.startsWith("/admin");// check url path is admin path

  function handleLogout() {
    localStorage.removeItem("token");// when user  click logout button temperary token will be removed from LS  
    setIsAuthenticated(""); // after removing token set authenticated user false or NULL
    navigate("/login"); // ✅ Navigate again to login URL after logout
  }

  return isAdminRoute ? (// is url is admin url then show side bar along with links for admin activity
    <div>
      {/* -----------============--If True----====Navbar for admin=============---------------------- */}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/"><img src={logo} alt="Logo" className="logo" /> </Link>
          <Link to="/">Home</Link>
          {/* ----------------------Normal user links--------------------------- */}
          {isAuthenticated && <Link to="/cart">Cart</Link>}
          {isAuthenticated && <Link to="/dashboard">Dashboard</Link>}
          {isAuthenticated && <Link to="/orders">Orders</Link>}
          {isAuthenticated && <Link to="/profile">Profile</Link>}
          {/* ----------------------Admin Links--------------------------------- */}
          {isAuthenticated && isAdmin && (<Link to="/admin/products">Admin</Link> )}
          {isAuthenticated && isAdmin && (<Link to="/admin/add-product">Add Product</Link> )}
        </div>
        <div className="navbar-right">
          {isAuthenticated?.length > 0 ? (<button className="logout-btn" onClick={handleLogout}> Logout </button>
          ) : (
            <Link className="login-link" to="/login"> Login </Link> )}
        </div>
      </nav>
      {/* -----------================Navbar ends here=============---------------------- */}

      <LayoutWithSidebar>
        <Routes>
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/edit/:id"  element={ isAuthenticated && isAdmin ? ( <EditProduct /> ) 
                                                                              : ( <Navigate to={"/login"} />)}/>

          <Route path="/admin/orders"    element={ isAuthenticated && isAdmin ? ( <AdminOrders />) 
                                                                              : (  <Navigate to={"/login"} /> )} />

          <Route path="/admin/dashboard" element={isAuthenticated && isAdmin ? ( <AdminDashboard />) 
                                                                              : (<Navigate to={"/login"} /> )}/>

          <Route  path="/admin/users"  element={ isAuthenticated && isAdmin ? ( <AdminUsers />)
                                                                             : (  <Navigate to={"/login"} />)} />
        </Routes>
      </LayoutWithSidebar>
    </div>
  ) : (
    <div>
      {/* ------------------------------------------Else Part--------Navbar for Normal Users --------------------*/}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
          <Link to="/">Home</Link>
          {isAuthenticated && <Link to="/cart">Cart</Link>}
          {isAuthenticated && <Link to="/orders">Orders</Link>}
          {isAuthenticated && <Link to="/profile">Profile</Link>}
          {isAuthenticated && <Link to="/checkout">Checkout</Link>}
        </div>
        <div className="navbar-right">
          {isAuthenticated?.length > 0 ? (<button className="logout-btn" onClick={handleLogout}>Logout </button>) :                             (<Link className="login-link" to="/login">Login </Link>)}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
