import { Footer } from '../Footer';
import { Header } from '../Header';
import fondo from '../../images/fondo.PNG';

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
            Después de seis años entre patrones y tejidos, me di cuenta que
            necesitaba algo diferente, que intelectualmente me diera más, me
            motivara y a lo que poder aplicar mis conocimientos sobre color,
            diseño… y como siempre me había llamado la atención la tecnología y
            el mundo IT me toca de cerca, ya que personas muy cercanas a mí se
            dedican a ello, comencé a buscar cursos para ver si realmente podría
            encajar con mis inquietudes, y así es como empecé unos cursos
            gratuitos que me hicieron ver que el desarrollo web podría ser mi
            nueva profesión.
          </p>
          <br />
          <p>
            Buscando un curso que me ayudara a formarme, encontré el bootcamp de
            Adalab, que me convenció con sus ideales, el trabajo en equipo,
            promover la integración de la mujer en el mundo laboral tecnológico…
          </p>
          <br />
          <p>
            Lo que más me gusta de la programación es que no te puedes acomodar,
            es un mundo muy cambiante, y no te puedes perder nada sino quieres
            quedarte atrás, mentalmente es muy gratificante, porque
            constantemente te enfrentas a nuevos retos, aunque a veces sea
            frustrante, siempre hay mil formas de solucionar un mismo problema y
            es un ambiente muy cooperativo, cualquier duda que tengas puedes
            consultarla, que siempre habrá alguien que la haya tenido antes.
          </p>
          <br />{' '}
          <p>
            Como gran diferencia con mi antiguo empleo veo que puedo estar
            durante horas enfrascada desarrollando algo, sin darme cuenta de que
            pasa el tiempo, porque me encanta lo que hago y me pone a prueba
            constantemente, y eso no me había pasado nunca.
          </p>{' '}
          <br />{' '}
          <p>
            Y sobre mí, he de destacar que soy muy familiar, me encanta trabajar
            en equipo (los últimos cuatro años he trabajado de forma transversal
            con otros departamentos), soy buena compañera, muy creativa,
            persistente y muy perseverante, siempre hago lo imposible por
            conseguir lo que quiero, me di cuenta de que necesitaba un cambio en
            mi vida e hice todo lo posible por llevarlo a cabo, y gracias a ello
            ahora soy programadora.
          </p>
          <br />{' '}
          <p>
            Creo que el haber dado este cambio radical a mi vida y en el ámbito
            laboral ha sido la mejor decisión, estoy muy motivada para construir
            proyectos nuevos, en los que aplicar todo lo que sé en cuanto a la
            parte creativa, de diseño y estética e ir mejorando mi parte
            técnica. Busco una empresa para trabajar como front-end developer,
            que me dé la oportunidad de seguir aprendiendo y poder aportar todo
            lo que ya sé del mundo laboral, después de seis años trabajando.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
