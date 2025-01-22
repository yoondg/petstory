import React from 'react';
import categories from '../data/categories.json';
import { Link } from 'react-router-dom';
import '../styles/pages/CategoryListPage.css';

const CategoryListPage = () => {
  return (
    <div className="category-list-page">
      <h1>카테고리</h1>
      <div className="categories">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img src={category.imageUrl} alt={category.name} className="category-image" />
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <Link to={`/category/${category.id}`} className="view-products">
              제품 보기
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryListPage;
