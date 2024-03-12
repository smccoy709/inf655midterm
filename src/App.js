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
      {/* Created routes to allow entry to the homepage (Shop), cart page (cart), and the checkout page (confirmation page) */}
      {/* The Shop page is a / directory and is the main page featuring all the products; it will pull from the Shop component */}
      {/* The Cart page is the shopping cart page (also known as the checkout page) and pulls from the Cart component */}
      {/* The Checkout page is the confirmation page after a user checks out by filling out their shipping information and reviewing
      the products and subtotal in the cart and then it pulls that information from the Checkout component; this is completed when the
      Checkout button is clicked on the Cart page after a user enters their information and wants to checkout and receive their
      confirmation number */}
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
