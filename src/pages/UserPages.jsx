import React from 'react';
import '../styles/pages/UserPages.css';

const UserPage = () => {
  const user = {
    name: "홍길동",
    email: "hong@example.com",
    recentOrders: [
      { id: "001", product: "강아지 사료", date: "2024-12-01", price: 20000 },
      { id: "002", product: "고양이 장난감", date: "2024-12-05", price: 15000 },
      { id: "003", product: "목욕 용품 세트", date: "2024-12-10", price: 30000 },
    ],
  };

  return (
    <div className="user-page">
      <h1>내 정보</h1>
      <div className="user-info">
        <table>
          <tbody>
            <tr>
              <th>이름</th>
              <td>{user.name}</td>
            </tr>
            <tr>
              <th>이메일</th>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="recent-orders">
        <h2>최근 주문 내역</h2>
        <table>
          <thead>
            <tr>
              <th>주문 번호</th>
              <th>상품명</th>
              <th>주문 날짜</th>
              <th>가격</th>
            </tr>
          </thead>
          <tbody>
            {user.recentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.date}</td>
                <td>{order.price.toLocaleString()}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="logout-button">로그아웃</button>
    </div>
  );
};

export default UserPage;
