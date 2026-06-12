import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
      </div>
      <div className={`nav_toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav_menu ${menuOpen ? "nav_menu_active" : ""}`}>
        <li onClick={() => { setMenu("shop"); setMenuOpen(false); }}><Link style={{textDecoration:'none', color:'#333'}} to='/'>Shop</Link>{menu === "shop" && <hr />}</li>
        <li onClick={() => { setMenu("men"); setMenuOpen(false); }}><Link style={{textDecoration:'none', color:'#333'}} to='/men'>Men</Link>{menu === "men" && <hr />}</li>
        <li onClick={() => { setMenu("women"); setMenuOpen(false); }}><Link style={{textDecoration:'none', color:'#333'}} to='/women'>Women</Link>{menu === "women" && <hr />}</li>
        <li onClick={() => { setMenu("kids"); setMenuOpen(false); }}><Link style={{textDecoration:'none', color:'#333'}} to='/kids'>Kids</Link>{menu === "kids" && <hr />}</li>
      </ul>
      <div className="nav_login_cart">
        <Link to='/login' onClick={() => setMenuOpen(false)}><button>Login</button></Link>
        <Link to='/cart' onClick={() => setMenuOpen(false)}><img src={cart_icon} alt="Cart" /></Link>
        <div className="nav_cart_count">0</div>
      </div>
    </div>
  )
}

export default Navbar