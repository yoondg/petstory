import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';
import UserPages from './pages/UserPages';
import BrandPage from './pages/BrandPage'; 
import CommunityPage from './pages/CommunityPage'; 
import NoticePage from './pages/NoticePage'; 
import ReviewPage from './pages/ReviewPage';
import LookbookPage from './pages/LookbookPage';
import './styles/reset/reset.css';
import './styles/global.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/community/:type" element={<CommunityPage />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/user" element={<UserPages />} />
            <Route path="/brand" element={<BrandPage />} /> 
            <Route path="/notices" element={<NoticePage />} /> 
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/lookbook" element={<LookbookPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
