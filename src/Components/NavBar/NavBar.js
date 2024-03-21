import CartWidget from '../CartWidget/CartWidget';
import logoBar from '../../logos/logo_yard_sale.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      
      <div className="navbar-left">
      <img src={logoBar} alt="logoBar" className="logo"></img>
        <ul>
          <li>
            <button type="button">All</button>
          </li>
          <li>
            <button type="button">Clothes</button>
          </li>
          <li>
            <button type="button">Electronics</button>
          </li>
          <li>
            <button type="button">Fornitures</button>
          </li>
          <li>
            <button type="button">Collectibles</button>
          </li>
          <li>
            <button type="button">Others</button>
          </li>
        </ul>
      </div>

      <CartWidget/>
      
    </nav>
  );
};

export default NavBar;
