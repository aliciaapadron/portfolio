import { Footer } from '../Footer';
import { Header } from '../Header';
import pdf from '../../images/pdf.pdf';

export function Contact() {
  return (
    <>
      <Header />
      <section className="contactsection">
        <h2 className="contactsection__title">
          Encuentra comunidad Autista y (T)DAH en mis RRSS:
        </h2>
        <ul className="contactsection__list">
          <li className="contactsection__list--item">
            <i className="icon fa-brands fa-linkedin"></i>
            <a
              className="contactlink"
              href="https://www.linkedin.com/in/aliciapadronpasquin/"
              title="Ir a linkedin"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className="contactsection__list--item">
            <i class="icon fa-brands fa-github-alt"></i>
            <a
              className="contactlink"
              href="https://github.com/aliciaapadron"
              title="Ir a github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="contactsection__list--item">
            <i class="icon fa-brands fa-twitter"></i>
            <a
              className="contactlink"
              href="https://twitter.com/home?lang=es"
              title="Ir a twitter"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li className="contactsection__list--item">
            <i className="icon fa-solid fa-paper-plane"></i>
            <a
              className="contactlink"
              href="mailto: cpadronsaludmental@gmail.com"
              title="Enviar un email"
              target="_blank"
              rel="noreferrer"
            >
              Escríbeme
            </a>
          </li>
          <li className="contactsection__list--item">
            <i class="icon fa-solid fa-file-arrow-down"></i>
            <a
              className="contactlink"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              download="nombre_pretendido_del archivo.pdf"
            >
              Descargar CV
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
