import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/pages/CategoryPage.css';

const CategoryPage = () => {
  const { categoryName } = useParams();

  return (
    <div className="category-page">
      <h1>{categoryName}</h1>
      <p>{categoryName} 카테고리의 제품 목록을 보여줍니다.</p>
    </div>
  );
};

export default CategoryPage;
