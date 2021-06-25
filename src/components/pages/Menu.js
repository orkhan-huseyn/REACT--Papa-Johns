import { useContext, useEffect } from "react";

import AppContext from "../store/app-context";

function Menu() {
    const ctx = useContext(AppContext);

    useEffect(() => {
      ctx.changeActivePageHandler('menu');
    }, [ctx]);

    return (
        <section className='section-menu'>
            <h1>Menu</h1>
        </section>
    );
}

export default Menu;