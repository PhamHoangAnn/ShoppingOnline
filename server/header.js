import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

class Menu extends Component {
  static contextType = MyContext; // Sử dụng context để lấy trạng thái giỏ hàng/user

  constructor(props) {
    super(props);
    this.state = { txtKeyword: '' };
  }

  render() {
    const { mycart, customer } = this.context;
    return (
      <header className="main-header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo-section">
            <Link to="/home" className="brand-logo">
              SHOPPING<span>ONLINE</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item"><Link to="/home">Trang chủ</Link></li>
              <li className="nav-item"><Link to="/products">Sản phẩm</Link></li>
              <li className="nav-item"><Link to="/myprofile">Tài khoản</Link></li>
              <li className="nav-item"><Link to="/myorders">Đơn hàng</Link></li>
            </ul>
          </nav>

          {/* Search & Actions */}
          <div className="header-actions">
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Tìm kiếm sản phẩm..." 
                value={this.state.txtKeyword} 
                onChange={(e) => this.setState({ txtKeyword: e.target.value })} 
              />
              <button onClick={() => this.lnkSearchClick()} className="btn-search">
                <i className="fa className-search">🔍</i>
              </button>
            </div>

            {/* Giỏ hàng */}
            <Link to="/mycart" className="cart-icon-wrapper">
              <span className="cart-icon">🛒</span>
              <span className="cart-badge">{mycart ? mycart.length : 0}</span>
            </Link>

            {/* User Info / Tình trạng đăng nhập */}
            <div className="user-status">
              {customer ? (
                <span className="welcome-msg">Chào, <b>{customer.name}</b></span>
              ) : (
                <Link to="/login" className="btn-login-nav">Đăng nhập</Link>
              )}
            </div>
          </div>
        </div>
      </header>
    );
  }

  lnkSearchClick() {
    if (this.state.txtKeyword.trim()) {
      // Logic điều hướng sang trang tìm kiếm của bạn tại đây
      window.location.href = '/product/search/' + this.state.txtKeyword;
    }
  }
}

export default Menu;