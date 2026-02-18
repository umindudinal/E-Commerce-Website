import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("shop")

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav_menu">
        <li onClick={() => setMenu("shop")}><Link style={{textDecoration:'none', color:'#333'}} to='/'>Shop</Link>{menu === "shop" && <hr />}</li>
        <li onClick={() => setMenu("men")}><Link style={{textDecoration:'none', color:'#333'}} to='/men'>Men</Link>{menu === "men" && <hr />}</li>
        <li onClick={() => setMenu("women")}><Link style={{textDecoration:'none', color:'#333'}} to='/women'>Women</Link>{menu === "women" && <hr />}</li>
        <li onClick={() => setMenu("kids")}><Link style={{textDecoration:'none', color:'#333'}} to='/kids'>Kids</Link>{menu === "kids" && <hr />}</li>
      </ul>
      <div className="nav_login_cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav_cart_count">0</div>
      </div>
    </div>
  )
}

export default Navbar