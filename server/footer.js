import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3>Về Chúng Tôi</h3>
          <p>Hệ thống mua sắm trực tuyến hàng đầu, mang lại sản phẩm chất lượng cao và trải nghiệm dịch vụ tuyệt vời nhất cho khách hàng.</p>
        </div>
        <div className="footer-col">
          <h3>Liên Kết Nhanh</h3>
          <ul>
            <li><Link to="/home">Trang chủ</Link></li>
            <li><Link to="/products">Tất cả sản phẩm</Link></li>
            <li><Link to="/mycart">Giỏ hàng hàng</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Hỗ Trợ Khách Hàng</h3>
          <ul>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách đổi trả 1:1</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ShoppingOnline Project. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;