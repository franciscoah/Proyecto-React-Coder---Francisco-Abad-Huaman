import CartWidget from '../CartWidget/CartWidget';
import logoBar from '../../logos/logo_yard_sale.svg';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logoBar} alt="logoBar" className="logo"></img>
        <ul>
          <li>
            <Link to="/">All</Link>
          </li>
          <li>
            <NavLink to={'/category/clothes'} >Clothes</NavLink>
          </li>
          <li>
            <NavLink to={'/category/electronics'} >Electronics</NavLink>
          </li>
          <li>
            <NavLink to={'/category/plants'} >Plants</NavLink>
          </li>
          <li>
            <NavLink to={'/category/collectibles'} >Collectibles</NavLink>
          </li>
          <li>
            <NavLink to={'/category/others'}>Others</NavLink>
          </li>
        </ul>
      </div>

      <CartWidget classname="navbar-right" />
    </nav>
  );
};

export default NavBar;
