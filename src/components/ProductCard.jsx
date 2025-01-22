import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 가져오기
import '../styles/components/ProductCard.css';
import { CartContext } from '../components/CartContext'; // CartContext 가져오기
import { FaHeart, FaThumbsUp, FaComment, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product, addToCart }) => {
  const { id, name, price, imageUrl, discountRate, description } = product; // id 추가
  const [liked, setLiked] = useState(false);
  const [thumbsUp, setThumbsUp] = useState(false);
  const [comments, setComments] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLike = () => setLiked(!liked);
  const handleThumbsUp = () => setThumbsUp(!thumbsUp);
  const handleComments = () => setComments(!comments);

  const handleCardClick = () => {
    navigate(`/product/${id}`); // id를 기반으로 상세 페이지로 이동
  };

  return (
    <div className="product-card" onClick={handleCardClick}> {/* 카드 클릭 이벤트 추가 */}
      <div className="product-image">
        <img src={imageUrl} alt="" />
        <div className="hover-icons">
          <FaHeart
            className={`icon heart-icon ${liked ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); handleLike(); }}
          />
          <FaThumbsUp
            className={`icon thumbs-up-icon ${thumbsUp ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); handleThumbsUp(); }}
          />
          <FaComment
            className={`icon comment-icon ${comments ? 'active' : ''}`}
            onClick={(e) => { e.stopPropagation(); handleComments(); }}
          />
        </div>
        
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <div className="product-prices">
          {discountRate > 0 && <span className="original-price">{price}원</span>}
          <span className="discounted-price">
            {Math.floor(price * (1 - discountRate / 100))}원
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
