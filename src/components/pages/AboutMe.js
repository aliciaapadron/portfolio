import { Footer } from '../Footer';
import { Header } from '../Header';
import fondo from '../../images/fondo1.png';

export function AboutMe() {
  return (
    <>
      <Header />
      <section className="aboutsection">
        <h2 className="aboutsection__title">
          Conóceme <br />
        </h2>

        <img
          className="aboutsection__img"
          src={fondo}
          alt="Imagen de Cris y Eli"
          title="Imagen de Cris y Eli"
        />
        <div className="aboutsection__text">
          <p>
            Dediqué seis años al mundo textil 👗, pero llegado un momento decidí
            darle un giro a mi vida y a mi carrera y así fue como me embarqué en
            el mundo IT ✨​.{' '}
          </p>
          <br />
          <p>
            Soy diseñadora, patronista y asesora de imagen personal y
            corporativa, actitudes que me ayudan a crear páginas webs cuidadas
            al detalle 👌​.
          </p>{' '}
          <br />
          <p>
            Si tuviera que definirme con una palabra, sería familiar, es lo que
            hizo que me replantease mi vida laboral, y buscar un nuevo reto que
            me permitiera estar cerca de los míos.
          </p>{' '}
          <br />
          <p>
            Ahora estoy buscando una empresa que me permita seguir aprendiendo y
            poner a su disposición la experiencia de una persona que ya ha
            trabajado seis años y tiene detrás una formación bastante
            interesante para incorporar en el mundo IT 👩‍💻.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
