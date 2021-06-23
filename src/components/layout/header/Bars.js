import { useState } from "react";

function Bars({ onToggleNav }) {
    const [barsActive, setBarsActive] = useState(false);

    function toggleBarsHandler() {
        setBarsActive(prevState => !prevState);
        onToggleNav();
    }

    return (
        <button onClick={toggleBarsHandler} className={`bars ${barsActive ? 'bars--active' : ''}`}>
            <span className='bars__content'></span>
        </button>
    );
}

export default Bars;