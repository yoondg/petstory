import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import '../styles/pages/CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext); // 삭제 함수 가져오기
  const [quantities, setQuantities] = useState(cart.map(() => 1)); // 수량 상태 관리

  const handleQuantityChange = (index, amount) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + amount); // 최소 수량은 1
      return newQuantities;
    });
  };

  const handleOrder = () => {
    alert('주문이 완료되었습니다.');
  };

  const totalPrice = cart.reduce((sum, item, index) => sum + item.price * quantities[index], 0);
  const shippingFee = 2500;
  const finalPrice = totalPrice + shippingFee;

  return (
    <div className="cart-page">
      <h1>장바구니</h1>
      <div className="cart-table">
        <table>
          <thead>
            <tr>
              <th>상품정보</th>
              <th>옵션</th>
              <th>수량</th>
              <th>상품금액</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td className="product-info">
                  <img src={item.imageUrl} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                </td>
                <td>
                  <p>사이즈: {item.size}</p>
                  <p>
                    컬러:{' '}
                    <span
                      style={{
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        backgroundColor: item.color,
                        border: '1px solid #ccc',
                      }}
                    ></span>
                  </p>
                </td>
                <td>
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <span>{quantities[index]}</span>
                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>
                </td>
                <td>{(item.price * quantities[index]).toLocaleString()}원</td>
                <td>
                  <button onClick={() => removeFromCart(index)}>삭제</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-summary">
        <div>
          <p>총 상품금액: {totalPrice.toLocaleString()}원</p>
          <p>총 배송비: {shippingFee.toLocaleString()}원</p>
          <p>결제 예정 금액: {finalPrice.toLocaleString()}원</p>
        </div>
        <div className="cart-buttons">
          <button onClick={handleOrder}>선택상품 주문</button>
          <button onClick={handleOrder}>전체상품 주문</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
