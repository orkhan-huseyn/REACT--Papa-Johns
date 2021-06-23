import { Fragment } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {
  return (
    <Fragment>
      <OwlCarousel items={1} className="owl-theme" loop center autoplay>
        <div className="item">
          <img src="assets/img/slider/slider1.jpg" alt="Slider Item" />
        </div>
        <div className="item">
          <img src="assets/img/slider/slider2.jpg" alt="Slider Item" />
        </div>
        <div className="item">
          <img src="assets/img/slider/slider3.jpg" alt="Slider Item" />
        </div>
      </OwlCarousel>
    </Fragment>
  );
}

export default Home;