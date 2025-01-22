import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/pages/ReviewPage.css';

const ReviewPage = () => {
  const lookbookImages = Array.from({ length: 11 }, (_, i) => `/assets/images/lookbook${i + 1}.webp`);

  const reviews = [
    { id: 1, name: '초코', image: lookbookImages[0], rating: 4.5, content: '너무 좋아요! 우리 강아지가 정말 좋아합니다.' },
    { id: 2, name: '루비', image: lookbookImages[1], rating: 4.0, content: '배송이 빨랐어요. 품질도 좋아요.' },
    { id: 3, name: '뭉치', image: lookbookImages[2], rating: 5.0, content: '기대 이상이에요. 강아지가 너무 좋아해요!' },
    { id: 4, name: '보리', image: lookbookImages[3], rating: 3.5, content: '품질은 좋지만 강아지가 덜 먹네요.' },
    { id: 5, name: '꼬미', image: lookbookImages[4], rating: 4.0, content: '전체적으로 만족스러워요!' },
    { id: 6, name: '달이', image: lookbookImages[5], rating: 4.8, content: '정말 잘 먹어요! 추천합니다.' },
    { id: 7, name: '두리', image: lookbookImages[6], rating: 3.0, content: '생각보다 평범했지만 나쁘진 않아요.' },
    { id: 8, name: '밤이', image: lookbookImages[7], rating: 5.0, content: '완벽합니다! 저희 강아지가 정말 좋아해요.' },
    { id: 9, name: '솜이', image: lookbookImages[8], rating: 4.2, content: '맛있게 먹는 모습이 너무 귀엽습니다.' },
    { id: 10, name: '진이', image: lookbookImages[9], rating: 4.5, content: '가격 대비 품질이 아주 좋습니다.' },
    { id: 11, name: '누리', image: lookbookImages[10], rating: 4.9, content: '다른 제품도 사고 싶어졌어요.' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {Array.from({ length: fullStars }).map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="star" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="star" />}
      </>
    );
  };

  const paginate = (page) => {
    setCurrentPage(page);
  };

  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  return (
    <div className="review-page">
      <h1>Review</h1>
      <p>고객님들의 생생한 후기를 확인해보세요.</p>
      <div className="review-list">
        {currentReviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} className="profile-picture" />
            <h2>{review.name}</h2>
            <div className="rating">{renderStars(review.rating)}</div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-button ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
