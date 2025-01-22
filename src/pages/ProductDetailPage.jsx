import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../components/CartContext'; // CartContext 가져오기
import products from '../data/products.json';
import '../styles/pages/ProductDetailPage.css';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  const { addToCart } = useContext(CartContext); // CartContext에서 addToCart 함수 가져오기
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [activeTab, setActiveTab] = useState('info');

  if (!product) {
    return <p>상품 정보를 찾을 수 없습니다.</p>;
  }

  const discountedPrice = Math.floor(product.price * (1 - product.discountRate / 100));

  // 구매하기 버튼 클릭 이벤트
  const handleBuyNow = () => {
    alert('로그인 후 구매하실 수 있습니다.');
  };

  // 장바구니 담기 버튼 클릭 이벤트
  const handleAddToCart = () => {
    if (!size || !color) {
      alert('사이즈와 컬러를 선택해주세요.');
      return;
    }
    addToCart({ ...product, size, color }); // CartContext의 addToCart 호출
    alert('장바구니에 상품이 추가되었습니다.');
  };

  // 관심상품 등록 버튼 클릭 이벤트
  const handleAddToWishlist = () => {
    alert('관심상품에 등록되었습니다.');
  };

  return (
    <div className="product-detail-page">
      {/* 네비게이션 */}
      <nav className="breadcrumb">
        <a href="/">홈</a> &gt; <a href="/category">영양제 케어</a> &gt; {product.name}
      </nav>

      {/* 상품 상세 컨테이너 */}
      <div className="product-detail-container">
        {/* 이미지 갤러리 */}
        <div className="product-image-gallery">
          <div className="main-image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="thumbnail-container">
            {[...Array(3)].map((_, index) => (
              <img
                key={index}
                src={product.imageUrl}
                alt={`Thumbnail ${index}`}
                className="thumbnail"
              />
            ))}
          </div>
        </div>

        {/* 상품 정보 */}
        <div className="product-info-container">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-summary">관리자 페이지에서 설정 가능합니다.</p>
          <p className="product-price">
            판매가: <span>{discountedPrice.toLocaleString()}원</span>
          </p>
          <p className="original-price">
            정가: {product.price.toLocaleString()}원 ({product.discountRate}% <span>할인</span>)
          </p>
          <p className="delivery-info">배송비: 2,500원 <span>(50,000원 이상 구매 시 무료)</span></p>

          {/* 옵션 선택 */}
          <div className="product-options">
            <div className="option">
              <label>사이즈</label>
              <div className="option-buttons">
                {['S', 'M', 'L', 'XL'].map((s) => (
                  <button
                    key={s}
                    className={size === s ? 'selected' : ''}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="option">
              <label>컬러</label>
              <div className="option-buttons">
                {['#ccc', '#333', '#999'].map((c, index) => (
                  <button
                    key={index}
                    className={color === c ? 'selected' : ''}
                    style={{ backgroundColor: c }}
                    onClick={() => setColor(c)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 선택된 옵션 표시 */}
          <div className="selected-options">
            <p><strong>선택된 옵션:</strong></p>
            <p>사이즈: {size || '선택되지 않음'}</p>
            <p>
              컬러: {color ? (
                <span
                  style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    backgroundColor: color,
                    border: '1px solid #ccc',
                  }}
                ></span>
              ) : '선택되지 않음'}
            </p>
          </div>

          {/* 구매 액션 */}
          <div className="purchase-actions">
            <button className="buy-now" onClick={handleBuyNow}>
              바로 구매하기
            </button>
            <button className="add-to-cart" onClick={handleAddToCart}>
              장바구니 담기
            </button>
            <button className="wishlist" onClick={handleAddToWishlist}>
              관심상품 등록
            </button>
          </div>
        </div>
      </div>

      {/* 탭 */}
      <div className="product-tabs">
        <ul className="tab-list">
          <li
            className={activeTab === 'info' ? 'active' : ''}
            onClick={() => setActiveTab('info')}
          >
            상품정보
          </li>
          <li
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            상품후기
          </li>
          <li
            className={activeTab === 'qa' ? 'active' : ''}
            onClick={() => setActiveTab('qa')}
          >
            Q&A
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === 'info' && <p>상품 상세 설명이 여기에 표시됩니다.</p>}
          {activeTab === 'reviews' && <p>리뷰가 없습니다.</p>}
          {activeTab === 'qa' && <p>Q&A가 없습니다.</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
