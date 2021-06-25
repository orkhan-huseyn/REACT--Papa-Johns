import { useContext, useEffect } from "react";

import AppContext from "../store/app-context";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const slider = [
  {
    id: "s1",
    image: "assets/img/slider/slider1.jpg",
  },
  {
    id: "s2",
    image: "assets/img/slider/slider2.jpg",
  },
  {
    id: "s3",
    image: "assets/img/slider/slider3.jpg",
  },
];

function Home() {
  const ctx = useContext(AppContext);

  useEffect(() => {
    ctx.changeActivePageHandler("home");
  }, [ctx]);

  return (
    <section className="section-home">
      <OwlCarousel items={1} className="owl-theme" loop center autoplay>
        {slider.map((slide, index) => {
          return (
            <div key={slide.id} className="item">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          );
        })}
      </OwlCarousel>
    </section>
  );
}

export default Home;
