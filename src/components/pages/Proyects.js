import { Footer } from '../Footer';
import { Header } from '../Header';
import img1 from '../../images/img1.JPG';
import img2 from '../../images/img2.JPG';
import img3 from '../../images/img3.JPG';
import img4 from '../../images/img4.JPG';
import img5 from '../../images/img5.JPG';
import img6 from '../../images/img6.JPG';
import img7 from '../../images/img7.JPG';
import img8 from '../../images/img8.JPG';
import img9 from '../../images/img9.JPG';

export function Proyects() {
  return (
    <>
      <Header />
      <section className="proyectsection">
        <h2 className="proyectsection__title">
          Aquí podrás encontrar links a mis trabajos.
        </h2>
        <ul className="list">
          <li className="list__item">
            <a
              className="list__item--link"
              href="https://aliciaapadron.github.io/cpadronsaludmental/"
              target="_blank"
              rel="noreferrer"
              title="Ir al proyecto"
            >
              C.Padrón Salud Mental
            </a>
            <img className="list__item--img" src={img1} alt="Vista previa" />
          </li>
          <li className="list__item">
            <a
              className="list__item--link"
              href="https://aliciaapadron.github.io/SpaceX-Missions-Search/#/"
              target="_blank"
              rel="noreferrer"
              title="Ir al proyecto"
            >
              SpaceX-Missions Search
            </a>
            <img className="list__item--img" src={img2} alt="Vista previa" />
          </li>
          <li className="list__item">
            <a
              className="list__item--link"
              href="https://aliciaapadron.github.io/owen-wilson-wows/"
              target="_blank"
              rel="noreferrer"
              title="Ir al proyecto"
            >
              Owen Wilson wows
            </a>
            <img className="list__item--img" src={img3} alt="Vista previa" />
          </li>
          <li className="list__item">
            <a
              className="list__item--link"
              href="https://aliciaapadron.github.io/owen-wilson-wows/"
              target="_blank"
              rel="noreferrer"
              title="Ir al proyecto"
            >
              Awesome profil cards
            </a>
            <img className="list__item--img" src={img4} alt="Vista previa" />
          </li>
          <li className="list__item">
            <a
              className="list__item--link"
              href="https://aliciaapadron.github.io/react-porfolio/"
              target="_blank"
              rel="noreferrer"
              title="Ir al proyecto"
            >
              Página personal
            </a>
            <img className="list__item--img" src={img5} alt="Vista previa" />
          </li>
          <li className="list__item">
            <a
              className="list__item--link"
              href="https://aliciaapadron.github.io/friends-quotes/"
              target="_blank"
              rel="noreferrer"
              title="Ir al proyecto"
            >
              Friends Quotes
            </a>
            <img className="list__item--img" src={img6} alt="Vista previa" />
          </li>
          <li className="list__item">
            <a
              className="list__item--link"
              href="https://aliciaapadron.github.io/cocktail-finder/"
              target="_blank"
              rel="noreferrer"
              title="Ir al proyecto"
            >
              Cocktail finder
            </a>
            <img className="list__item--img" src={img7} alt="Vista previa" />
          </li>
          <li className="list__item">
            <a
              className="list__item--link"
              href="https://aliciaapadron.github.io/project-lov3lace/"
              target="_blank"
              rel="noreferrer"
              title="Ir al proyecto"
            >
              Lov3lace
            </a>
            <img className="list__item--img" src={img8} alt="Vista previa" />
          </li>
          <li className="list__item">
            <a
              className="list__item--link"
              href="https://aliciaapadron.github.io/open-spaces/"
              target="_blank"
              rel="noreferrer"
              title="Ir al proyecto"
            >
              Open Spaces
            </a>
            <img className="list__item--img" src={img9} alt="Vista previa" />
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
