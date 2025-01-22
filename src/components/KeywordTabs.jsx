import React, { useState } from 'react';
import Title from './Title';
import ProductCard from './ProductCard';
import products from '../data/products.json'
import '../styles/components/KeywordTabs.css';
const KeywordTabs = ({addToCart}) => {
  const [activeTab, setActiveTab]  = useState('방석');
  const [visibleCount, setVisibleCount] = useState(4);
  const categories = ["방석", "간식", "위생용품"];
  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );
  //더보기 버튼 핸들러
  const handleLoadMore =()=>{
    setVisibleCount((prevCount) => prevCount + 4);
  }
  return (
    <section className="keyword-tabs inner">
      <Title title="인기있는 키워드 모아보기"></Title>
      {/* 탭메뉴 */}
      <div className='tab-menu'>
        {categories.map((category)=>(
          <button
            key={category}
            className={activeTab === category ? "active" : ""}
            onClick={()=>{
              setActiveTab(category);
              setVisibleCount(4);
            }}>#{category}</button>
        ))}
      </div>
      {/* 상품리스트 */}
      <div className='product-list'>
        {filteredProducts.slice(0, visibleCount).map((product)=>(
            <ProductCard key={product.name} product={product} addToCart={addToCart}/>
          ))}
      </div>
      {/* 더보기 버튼 */}
      {visibleCount < filteredProducts.length &&(
        <div className='load-more'>
        <button onClick={handleLoadMore}>더보기</button>
      </div>
      )}
      
    </section>
  );
};

export default KeywordTabs;
