import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Product from './components/Product';
import Products from './components/Products';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="products/*" element={<Products />} />
          <Route path="Products/*" element={<Products/>}>
            <Route path=":id" element={<Product/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
