import { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from '../../store/app-context';

function Navigation({ isActive }) {
  const ctx = useContext(AppContext);

  return (
    <nav className={`nav ${!isActive ? "nav__toggle" : ""}`}>
      <Link to="/" className={`nav__link ${ctx.activePage === 'home' ? 'nav__link--active' : ''}`} href="#">
        ƏSAS SƏHİFƏ
      </Link>
      <Link to="/about" className={`nav__link ${ctx.activePage === 'about' ? 'nav__link--active' : ''}`} href="#">
        HAQQIMIZDA
      </Link>
      <Link to="/menu" className={`nav__link ${ctx.activePage === 'menu' ? 'nav__link--active' : ''}`} href="#">
        MENYU
      </Link>
      <Link to="/restaurants" className={`nav__link ${ctx.activePage === 'restaurants' ? 'nav__link--active' : ''}`} href="#">
        RESTORANLAR
      </Link>
    </nav>
  );
}

export default Navigation;
