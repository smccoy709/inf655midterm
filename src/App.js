import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Shop } from './pages/shop/Shop';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { ShopContextProvider } from './context/ShopContext';

function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App;
