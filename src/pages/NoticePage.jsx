import React from 'react';
import '../styles/pages/NoticePage.css';

const NoticePage = () => {
  return (
    <div className="notice-page">
      <h1>공지사항</h1>
      <ul>
        <li>2024년 신제품 출시 소식</li>
        <li>설 연휴 배송 안내</li>
        <li>회원 등급별 할인 이벤트</li>
      </ul>
    </div>
  );
};

export default NoticePage;
