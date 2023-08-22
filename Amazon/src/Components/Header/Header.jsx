import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="" />
        <div className="nav">
            <ul>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/order">Order</a></li>
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
