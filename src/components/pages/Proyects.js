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
import img10 from '../../images/img10.JPG';
import img11 from '../../images/img11.JPG';
import img12 from '../../images/img12.JPG';
import img13 from '../../images/img13.JPG';
import img14 from '../../images/img14.JPG';

export function Proyects() {
  return (
    <>
      <Header />
      <section className="proyectsection">
        <h2 className="proyectsection__title">
          Aquí podrás encontrar links a mis trabajos.
        </h2>
        <ul className="list">
          {/* C.padronsaludmental */}
          <li className="list__item">
            <h4 className="list__item--title">C.Padrón Salud Mental</h4>
            <img
              className="list__item--img"
              src={img1}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-react"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/cpadronsaludmental"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/cpadronsaludmental/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
          {/* SpaceX */}
          <li className="list__item">
            <h4 className="list__item--title">SpaceX-Missions Search</h4>
            <img
              className="list__item--img"
              src={img2}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-react"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/SpaceX-Missions-Search"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/SpaceX-Missions-Search/#/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
          {/* Owen Wilson */}
          <li className="list__item">
            <h4 className="list__item--title">Owen Wilson wows</h4>
            <img
              className="list__item--img"
              src={img3}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-react"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/owen-wilson-wows"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/owen-wilson-wows/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
          {/* Página personal */}
          <li className="list__item">
            <h4 className="list__item--title"> Página personal</h4>
            <img
              className="list__item--img"
              src={img5}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-react"></i>
              <i class="tech fa-brands fa-html5"></i>{' '}
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/react-porfolio"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/react-porfolio/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>{' '}
          {/* Friends */}
          <li className="list__item">
            <h4 className="list__item--title"> Friends Quotes</h4>
            <img
              className="list__item--img"
              src={img6}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-square-js"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/friends-quotes"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/friends-quotes/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
          {/* Cocktail finder */}
          <li className="list__item">
            <h4 className="list__item--title"> Cocktail finder</h4>
            <img
              className="list__item--img"
              src={img7}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-square-js"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/cocktail-finder"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/cocktail-finder/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
          {/* Lov3lace */}
          <li className="list__item">
            <h4 className="list__item--title">Lov3lace</h4>
            <img
              className="list__item--img"
              src={img8}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/project-lov3lace"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/project-lov3lace/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>{' '}
          {/* Awesome profil cards sin página web node y MYSQL*/}
          <li className="list__item">
            <h4 className="list__item--title"> Awesome profil cards</h4>
            <img
              className="list__item--img"
              src={img4}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-react"></i>
              <i class="tech fa-brands fa-node-js"></i>
              <i class="tech fa-solid fa-database"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/awesome-profile-cards"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
            </div>
          </li>
          {/* Films-finder sin página web node y MYSQL*/}
          <li className="list__item">
            <h4 className="list__item--title"> Film finder</h4>
            <img
              className="list__item--img"
              src={img10}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-react"></i>
              <i class="tech fa-brands fa-node-js"></i>
              <i class="tech fa-solid fa-database"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/films-finder"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
            </div>
          </li>
          {/*Star wars */}
          <li className="list__item">
            <h4 className="list__item--title">Star wars</h4>
            <img
              className="list__item--img"
              src={img9}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-css3"></i>{' '}
              <i class="tech fa-brands fa-square-js"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/star_wars"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/star_wars/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
          {/*Sailor Moon */}
          <li className="list__item">
            <h4 className="list__item--title">Star wars</h4>
            <img
              className="list__item--img"
              src={img13}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-css3"></i>{' '}
              <i class="tech fa-brands fa-square-js"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/sailor-moon"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/sailor-moon/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
          {/*Ana Bolena profile cards */}
          <li className="list__item">
            <h4 className="list__item--title">Ana Bolena profile cards</h4>
            <img
              className="list__item--img"
              src={img11}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-square-js"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/ana-bolena-profile-cards"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/star_wars/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
          {/*Rating Component */}
          <li className="list__item">
            <h4 className="list__item--title">Rating Component</h4>
            <img
              className="list__item--img"
              src={img12}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-square-js"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/interactive_rating_component"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/interactive_rating_component/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
          {/*Interactive rating component */}
          <li className="list__item">
            <h4 className="list__item--title">Interactive rating component</h4>
            <img
              className="list__item--img"
              src={img14}
              alt="Vista previa"
              title="imagen del proyecto"
            ></img>
            <p className="list__item--text">
              {' '}
              <i class="tech fa-brands fa-html5"></i>{' '}
              <i class="tech fa-brands fa-sass"></i>{' '}
              <i class="tech fa-brands fa-square-js"></i>
            </p>
            <div className="list__item--link">
              <a
                className="proyecticon"
                href="https://github.com/aliciaapadron/open-spaces"
                target="_blank"
                rel="noreferrer"
                title="Ir al código"
              >
                <i class="fa-solid fa-code"></i>
              </a>
              <a
                href="https://aliciaapadron.github.io/open-spaces/"
                target="_blank"
                rel="noreferrer"
                className="proyecticon"
                title="Ir a la web"
              >
                <i class="fa-solid fa-display"></i>
              </a>
            </div>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
