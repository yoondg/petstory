import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/components/MainVisual.css'; // 스타일 파일

const MainVisual = () => {
  const images = [
    {
      src: '/assets/images/main_img01.jpg',
      alt: 'Main Image 1',
      title: 'New',
      description: '세밀하고 정확한 영양학적 솔루션 제공'
    },
    {
      src: '/assets/images/main_img02.jpg', alt: 'Main Image 2',
      title: 'Best',
      description: '반려동물 최상의 간식을 소개합니다'
    },
    {
      src: '/assets/images/main_img03.jpg', alt: 'Main Image 3', title: 'Healthy',
      description: '나이별, 상태별 라이프 스타일에 따른 건강'
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 769 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
    },
  };
  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  }
  return (
    <div className="main-visual">
      {/* 케러셀 컴포넌트 */}
      <Carousel
        responsive={responsive} //반응형설정
        infinite={true} //무한루프
        autoPlay={isPlaying} //자동재생
        autoPlaySpeed={3000}
        showDots={true} //아래에 점
        customTransition="all 0.5s"
        containerClass='carousel-container'
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <div className='text-content'>
              <h2 className='title'>{image.title}</h2>
              <p className='description'>{image.description}</p>
              <button className='mainvisual-button'>MORE</button>
            </div>
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Carousel>
      {/* 재생정지버튼 */}
      <div className='controls'>
        <button
          className='play-pause-btn'
          onClick={togglePlayPause}
        >
          {/* 버튼 아이콘 */}
          {isPlaying ? (
            <span className='pause'>일시 정지(❚❚)</span>
          ) : (
            <span className='play'>재생(▶)</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default MainVisual;
