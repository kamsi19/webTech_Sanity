import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from './';
import { Products } from './'
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container space">
      <p className="logo">
        <Link href="/">TrustEtronicsABC</Link>
      </p>

      <nav className="navbar-link">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="#products">
          <span>Products</span>
        </Link>
      </nav>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar