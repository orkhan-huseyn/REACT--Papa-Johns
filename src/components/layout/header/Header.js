import Logo from './Logo';
import Navigation from './Navigation';
import Bars from './Bars';
import CartButton from './CartButton/CartButton';
import { useState } from 'react';

function Header() {
    const [navIsActive, setNavIsActive] = useState(false);
    
    function toggleNavHandler() {
        setNavIsActive(prevState => !prevState);
    }

    return <header className='header'>
        <Logo />
        <Navigation isActive={navIsActive} />
        <Bars onToggleNav={toggleNavHandler} />
        <CartButton />
    </header>
}

export default Header;