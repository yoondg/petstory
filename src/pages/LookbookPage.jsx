import React from 'react';
import '../styles/pages/LookbookPage.css';

const LookbookPage = () => {
  const lookbookImages = Array.from({ length: 11 }, (_, i) => `/assets/images/lookbook${i + 1}.webp`);

  return (
    <div className="lookbook-page">
      <h1>Lookbook</h1>
      <p>최신 반려동물 스타일을 확인해보세요.</p>
      <div className="lookbook-gallery">
        {lookbookImages.map((image, index) => (
          <div className="lookbook-item" key={index}>
            <img src={image} alt={`Lookbook ${index + 1}`} />
            <div className="overlay"></div>
            <div className="text">{`Lookbook ${index + 1}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LookbookPage;
