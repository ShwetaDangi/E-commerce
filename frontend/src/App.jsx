import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
// import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Profile from './pages/Profile';
// import OrderSuccess from './pages/OrderSuccess';
import ReturnPolicy from './pages/ReturnPolicy';
import Disclaimer from './pages/Disclaimer';
import Register from './pages/Register';
import Login from './pages/Login';
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
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/return' element={<ReturnPolicy />}/>
        <Route path='/disclaimer' element={<Disclaimer />}/>        
        <Route path='/login' element={<Login />}/>        
        <Route path='/register' element={<Register />}/>        
        <Route path='/product/:id' element={<ProductDetail />}/>        
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;