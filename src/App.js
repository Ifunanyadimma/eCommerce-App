import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/navbar';
import { SuperMarket } from './Pages/superMarket/superMarket';
import { Cart } from './Pages/cart/cart';
import { SuperMarketContextProvider } from './Contex/SuperMarketContext';


function App() {
    return (
        <div className='App'>
            <SuperMarketContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<SuperMarket />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </SuperMarketContextProvider>
        </div>
    );
}

export default App;