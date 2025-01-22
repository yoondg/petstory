import React, { useState, useContext } from 'react';
import products from '../data/products.json'; // 제품 목록 JSON
import { CartContext } from '../components/CartContext';
import ProductCard from '../components/ProductCard';
import '../styles/pages/SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const popularKeywords = ['한정판매', '방석', '고기', '샴푸', '유기농']; // 인기 키워드

  const handleKeywordClick = (keyword) => {
    setSearchTerm(keyword); // 클릭한 해시태그를 검색창에 입력
  };

  return (
    <div className="search-page">
      <h1>상품 검색</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="popular-keywords">
          {popularKeywords.map((keyword, index) => (
            <span
              key={index}
              className="hashtag"
              onClick={() => handleKeywordClick(keyword)}
            >
              #{keyword}
            </span>
          ))}
        </div>
      </div>
      <div className="search-results">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
