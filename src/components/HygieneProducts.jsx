import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import products from "../data/products.json";
import Title from './Title';
import ProductCard from './ProductCard';
import '../styles/components/HygieneProducts.css';


const HygieneProducts = ({ addToCart }) => {
  const hygieneProducts = products.filter(
    (product) => product.category === "위생용품"
  );
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 769 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
    },
  };
  console.log('위생용품 필터링 결과는?', hygieneProducts)
  return (
    <section className='hygiene-products inner'>
      <Title title="위생용품" subTitle='깨끗하고 건강한 견생활'></Title>
      {/* 슬라이드영역 */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true}
        containerClass="carousel-container"
        itemClass="carousel-hygiene" // 각 아이템 클래스 추가
      >
        {hygieneProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </Carousel>
    </section>
  )
}

export default HygieneProducts