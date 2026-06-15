import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Shop from './pages/Shop';
// import ProductDetail from './pages/ProductDetail';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import OrderSuccess from './pages/OrderSuccess';
// import About from './pages/About';
// import Disclaimer from './pages/Disclaimer';
// import ReturnPolicy from './pages/ReturnPolicy';
// import AdminDashboard from './admin/AdminDashboard';
// import AddProduct from './admin/AddProduct';
// import AdminProducts from './admin/AdminProducts';
// import EditProduct from './admin/EditProduct';
// import AdminOrders from './admin/AdminOrders';
// import AdminUsers from './admin/AdminUsers';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;