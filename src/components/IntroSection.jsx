import React from 'react';
import '../styles/components/IntroSection.css';
const IntroSection = () => {
  const banners = [
    { src: '/assets/images/main_banner01.jpg', title: 'Pet story Info' },
    { src: '/assets/images/main_banner02.jpg', title: '장난감/훈련' },
    { src: '/assets/images/main_banner03.jpg', title: '맛있는 수제간식' },
  ];

  return (
    <section className="intro-section inner">
      <div className="intro-text " >
        <p>offers skin, hair and body care</p>
        <h2>균형잡힌 스킨케어 관리</h2>
        <p>세심하게 고안된 효과적이면서도,<br /> 감각적인 즐거움을 항상 선사할 수 있도록<br /> 까다롭게 스킨, 헤어, 바디 케어 제품을 제공합니다.</p>
        <div className="intro-buttons">
          <button>수제간식</button>
          <button>영양제케어</button>
          <button>강아지집</button>
          <button>산책용품</button>
        </div>
      </div>
      <div className="intro-banners">
        {banners.map((banner, index) => (
          <div key={index} className="banner-item">
            <img src={banner.src} alt={banner.title} />
            <span className="banner-title">{banner.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
