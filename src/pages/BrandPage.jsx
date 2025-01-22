import React from 'react';
import '../styles/pages/BrandPage.css';

const BrandPage = () => {
  return (
    <div className="brand-page">
      <div className="hero-section">
        <h1>Welcome to Pet Story</h1>
        <p>반려동물을 위한 사랑과 혁신의 여정</p>
      </div>
      <section className="brand-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>🐾 **반려동물 중심의 제품 설계**</li>
          <li>🌱 **지속 가능한 친환경 소재 사용**</li>
          <li>🤝 **고객과의 소통을 통한 지속적인 개선**</li>
        </ul>
      </section>
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          펫스토리는 반려동물과 사람 모두에게 더 나은 삶을 제공하기 위해 시작된 브랜드입니다.
          저희의 모든 제품은 사랑과 세심함으로 설계되었으며, 지속 가능한 미래를 위해 노력하고 있습니다.
        </p>
      </section>
    </div>
  );
};

export default BrandPage;
