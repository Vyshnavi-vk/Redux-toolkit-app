import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
