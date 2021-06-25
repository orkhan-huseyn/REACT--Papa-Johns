import { useContext, useEffect } from "react";

import AppContext from '../../store/app-context';

import PageTitle from "../../UI/PageTitle";
import Paragraph from "./Paragraph";

function About() {
  const ctx = useContext(AppContext);

  useEffect(() => {
    ctx.changeActivePageHandler('about');
  }, [ctx]);

  return (
    <section className="section-about">
      <PageTitle title="Papa John's" />
      <div className="section__about--container">
        <div className="section__about--image">
          <img className="cook" src="assets/img/cook.jpg" alt="Aşbaz" />
        </div>
        <div className="section__about--content">
          <Paragraph />
        </div>
      </div>
    </section>
  );
}

export default About;