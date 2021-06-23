import { Link } from 'react-router-dom';

function Navigation({isActive}) {
    function activateLink(e) {
        const active = document.querySelector('.nav__link--active');
        active.classList.remove('nav__link--active');
        e.target.classList.add('nav__link--active');
    }

    return (
        <nav className={`nav ${!isActive ? 'nav__hidden': ''}`}>
            <Link onClick={activateLink} to='/' className='nav__link nav__link--active' href="#">ƏSAS SƏHİFƏ</Link>
            <Link onClick={activateLink} to='/about' className='nav__link' href="#">HAQQIMIZDA</Link>
            <Link onClick={activateLink} to='/menu' className='nav__link' href="#">MENYU</Link>
            <Link onClick={activateLink} to='/restaurants' className='nav__link' href="#">RESTORANLAR</Link>
        </nav>
    );
}

export default Navigation;