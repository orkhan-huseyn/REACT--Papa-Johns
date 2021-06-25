import { Fragment } from "react";

import GalleryHeading from "./GalleryHeading";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function BranchGallery({ branch }) {
  if (!branch.images || branch.images.length === 0) {
    return <GalleryHeading>Qalereya boşdur</GalleryHeading>;
  }

  return (
    <Fragment>
      <GalleryHeading>{branch.name} Filialı</GalleryHeading>
      <OwlCarousel items={2} margin={10} className="owl-theme" loop center autoplay>
        {branch.images.map((image, index) => {
          return (
            <div key={Math.random().toString()} className="item">
              <img src={image} alt={`${branch.name} ${index}`} />
            </div>
          );
        })}
      </OwlCarousel>
    </Fragment>
  );
}

export default BranchGallery;