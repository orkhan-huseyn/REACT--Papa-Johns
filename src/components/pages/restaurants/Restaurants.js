import { useContext, useEffect } from "react";

import AppContext from "../../store/app-context";

import PageTitle from '../../UI/PageTitle';
import Branches from './Branches';
import Map from './Map';

function Restaurants() {
    const ctx = useContext(AppContext);

    useEffect(() => {
      ctx.changeActivePageHandler('restaurants');
    }, [ctx]);

    return (
        <section className='section-restaurants'>
            <PageTitle title='Restoranlar' />
            <Branches />
            <Map />
        </section>
    );
}

export default Restaurants;