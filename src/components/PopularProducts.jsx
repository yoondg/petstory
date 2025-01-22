import React, {useState} from 'react'
import Title from './Title';
import ProductCard from './ProductCard';
import products from '../data/products.json';

const PopularProducts = ({addToCart}) => {
  const itemsPerRow = 4;//한줄에 표시할 상품 수
  const [isHovered, setIsHovered]= useState(false);
  const [visibleCount, setVisibleCount] = useState(itemsPerRow);//현재보이는상품개수
  //더보기 버튼 클릭시 핸들링
  const handleLoadMore = () =>{
    setVisibleCount((prevCount)=>prevCount+ itemsPerRow);
  }
  const popularProducts = products.filter((product) => product.isBest);
  console.log(popularProducts);
  return (
    <section className='popular-products inner'>
      <Title title="이번 달 인기 상품" subTitle="많은 사랑을 받은 상품들을 만나보세요"/>
      <div className='product-list'>
        {popularProducts.slice(0, visibleCount).map((product, index) => (
          <ProductCard key={index} 
          product={product} 
          addToCart={addToCart}
          />
        ))}
      </div>
      {/* 더보기 버튼 */}
      {visibleCount < popularProducts.length && (<div className='more-button'>
        <button 
        style={{
          padding:'15px 30px', 
          border:'none', 
          backgroundColor:isHovered?'lightgray':'black', 
          color:isHovered?'#222':'#fff', 
          display:'block',
          margin:'auto', 
          cursor:'pointer',
          transition:'0.3s'
        }}
        onClick={handleLoadMore}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
        >더보기 버튼</button>
      </div>)}
    </section>
  )
}

export default PopularProducts