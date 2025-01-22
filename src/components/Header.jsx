import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';
import '../styles/components/Header.css';

const Header = () => {
  const { getCartCount } = useContext(CartContext); // 장바구니 총 개수 가져오기
  const [menuOpen, setMenuOpen] = useState(false); // 모바일 메뉴 상태
  const [activeSubMenu, setActiveSubMenu] = useState(null); // 모바일 서브메뉴 상태
  const [isMobile, setIsMobile] = useState(false); // 모바일 여부 확인

  const cartCount = getCartCount(); // 장바구니 개수 계산

  // 화면 크기에 따라 isMobile 상태 업데이트
  useEffect(() => {
    const updateView = () => setIsMobile(window.innerWidth <= 768);
    updateView();
    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  // 모바일 메뉴 토글
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // 서브메뉴 토글
  const toggleSubMenu = (menu) => {
    if (isMobile) {
      setActiveSubMenu(activeSubMenu === menu ? null : menu);
    }
  };

  return (
    <div className="header">
      <div className="inner header-inner">
        {/* 로고 */}
        <div className="header-logo">
          <Link to="/">
            <img src="/assets/images/logo.png" alt="로고" />
          </Link>
        </div>

        {/* 모바일 햄버거 메뉴 버튼 */}
        {isMobile && (
          <button className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </button>
        )}

        {/* 데스크탑 네비게이션 */}
        {!isMobile && (
          <nav className="desktop-nav">
            <ul className="main-menu">
              <li><Link to="/brand">Brand</Link></li>
              <li>
                <Link to="/category/사료와간식">Shop</Link>
                <ul className="sub-menu">
                  <li><Link to="/category/사료와간식">사료와간식</Link></li>
                  <li><Link to="/category/영양제">영양제 케어</Link></li>
                  <li><Link to="/category/목욕용품">목욕용품</Link></li>
                  <li><Link to="/category/리드줄">리드줄</Link></li>
                  <li><Link to="/category/하우스">하우스</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/community/공지사항">Community</Link>
                <ul className="sub-menu">
                  <li><Link to="/community/공지사항">공지사항</Link></li>
                  <li><Link to="/community/사용후기">상품 사용후기</Link></li>
                  <li><Link to="/community/Q&A">상품 Q&A</Link></li>
                  <li><Link to="/community/자유게시판">자유게시판</Link></li>
                  <li><Link to="/community/이벤트">이벤트</Link></li>
                </ul>
              </li>
              <li><Link to="/review">Review</Link></li>
              <li><Link to="/lookbook">Lookbook</Link></li>
            </ul>
          </nav>
        )}

        {/* 모바일 네비게이션 */}
        {isMobile && (
          <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
            <ul className="main-menu">
              <li><Link to="/brand">Brand</Link></li>
              <li>
              <Link to="/category/사료와간식"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu('shop');
                  }}
                >
                  Shop
                </Link>
                <ul className={`sub-menu ${activeSubMenu === 'shop' ? 'visible' : ''}`}>
                  <li><Link to="/category/사료와간식">사료와간식</Link></li>
                  <li><Link to="/category/영양제">영양제 케어</Link></li>
                  <li><Link to="/category/목욕용품">목욕용품</Link></li>
                  <li><Link to="/category/리드줄">리드줄</Link></li>
                  <li><Link to="/category/하우스">하우스</Link></li>
                </ul>
              </li>
              <li>
                <Link
                  to="/community/공지사항"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu('community');
                  }}
                >
                  Community
                </Link>
                <ul className={`sub-menu ${activeSubMenu === 'community' ? 'visible' : ''}`}>
                  <li><Link to="/community/공지사항">공지사항</Link></li>
                  <li><Link to="/community/사용후기">상품 사용후기</Link></li>
                  <li><Link to="/community/Q&A">상품 Q&A</Link></li>
                  <li><Link to="/community/자유게시판">자유게시판</Link></li>
                  <li><Link to="/community/이벤트">이벤트</Link></li>
                </ul>
              </li>
              <li><Link to="/review">Review</Link></li>
              <li><Link to="/lookbook">Lookbook</Link></li>
            </ul>
          </nav>
        )}

        {/* 헤더 아이콘 */}
        <div className="desktop-icons">
          <Link to="/user" className="icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/cart" className="icon cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <Link to="/search" className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
