
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  MapPin,
  Menu,
  Phone,
  UtensilsCrossed,
  X,
} from "lucide-react";
import "./page.css";

const images = {
  exterior: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SSISqvLXqc_u9iEkP6UM4Hk_lESGdTY4CuJjz6nHCw3gVy7AO4KPtLjwNbchrBl1vlX4hv1VGo-wh8pPO6_Df0RANZ1bFRfnJk-x116h1y3Vfj43No9CgjRN5iPq5ZgYs0v_PD=s1360-w1360-h1020",
  comida1: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QvfzS5HUR2Z-7IL2W8me0AwlIZhMfNfhUIyeShAzSWQf-uCbypeSoCD9fnete5Pk8H2ky0TV20GMruWNG2WdcFGdiEe86GRU0yNxs2o2Kxkx6RqgwDUytDZ8PAxDXvMDsKg_ISooV2jDs=s1360-w1360-h1020",
  comida2: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ROOxDkmzYc90c-sBP3cZSxc6BGwr_8-9TLF9ZnE7YjbYEh3CEsr5ULmphdXSStcHyLAfWvAeHb-6gxlZgH_CStoJqGA2yaJxfTjM4pgC7s9humY3rO_TkdvbAARzr-rYQhiRu0SQM0AKiL=s1360-w1360-h1020",
  exterior2: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RcTzuY5F50czrAxo5s8HoLTArJqVoFHREpSIs8G1GPzsnzQbS6iGvLUyVV55upJ2jDKb2jNG9dKs8ynnKv08GbuorAIcdCapy1HhSKQ6Xfnl3jFroZ_kE0d-2E-k5hkCptIHpPM9gf_PI=s1360-w1360-h1020",
  interior: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RVBidA_wdenLjTEHPsO5pFN-rZyX3SIeyrvKiiuZ54lM0nDglVpgFPgWNuz3aAf2G45N5rhT4VLY-ZlUrzxJ5usof_TPxpnEJg1qudhj46SKDv084fKUmp6538hMW5iagyTo2mqQ=s1360-w1360-h1020",
  comida3: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QYeVuRdTn5ppuE5WC4cQlchCrDX-kK4kLqrEUw_isUjBL8KhzLLrE-px8xZhySY6lbphM1xbu9L_qywXPWuOMf6sfpRv1CltKN91I8IN6BdnsRxguQBDJDdwH3-VU2XyQkDYie=s1360-w1360-h1020",
  comida4: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SZWD9dzMetEl7TdelHwsSirX20n70Tu1Dd3YU1NQGmNn63d0wZW9k01lEG7q-tbWVeTcSpJdliimtq_tWj47kvuI7IeLXZFr2N8cFUPNiXiM4dkrIoUfqfcXQdBxp5yS__cb05=s1360-w1360-h1020",
  comida5: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QAZJhyhySXu73S145KvAEz1KvsTww3ZkbMV1xl8bJYMeEbeFyjU_S3m_Ka18169NLMRes6CiTDPPvuNQkIXkr0xIOAZoMc3l7KWi8XjGGqaLo65C856dV7vvrZgVzCdnVKaxbB3g=s1360-w1360-h1020",
  comida6: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TIpyqqLvcpCubtPoTjXzJJ2dT44fYU4o6fSVQxs9YGAV9Z3SDAn8C-B4KUh8-cTYUka9PmgM0AsHhmkSuOEsFtAwyW58PKcnHi1WpOPhToPs0setVfUdjU31sPZ2TU_ZRnz1xr=s1360-w1360-h1020",
  comida7: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SE-z-4ZSK332KUcxpLHAPD8EJ2nh02kMRNMap6iErTzbwEIy42h95loB_5QWIDkZ2qaHPi5o99OMHSRkCAMS1NOmcO4FFWDXgMPEswmpVs_ePBS3K2ejF2wOJrtN5HEqbugBVt=s1360-w1360-h1020",
  comida8: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q0lI8XFub6ow9QUmBTZXsKdF36VnpbzFMy8pTnjGqC7TcLuD5t3kRsEFjWz-Ih4l9Mhe9xjm5TjP6yQq9l_nLQVtW3musueEeeiEVIS4WOT98-bsOlk5NIG1aoymAdB0WncHcf=w141-h235-n-k-no-nu",
  exterior3: "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TTmtSN33j7Lwnwj4VZ9P3Kf7_bSLSaDQzq7qiHsVviY2X8JJi1Hrg5nRLbdbBJiYL9WgyvPZ_dV63TyTta-Y73eaZmsK7uy64CfFO5fpiBegbLgX0M8K_ocy9UX7xDeEhuFyPE=s1360-w1360-h1020",
};

const gallery = [
  { src: images.comida1, alt: "Plato de la cocina de El Patio", category: "Nuestra cocina" },
  { src: images.comida2, alt: "Una de las propuestas gastronómicas del restaurante", category: "Gastronomía" },
  { src: images.interior, alt: "Interior de El Patio", category: "El restaurante" },
  { src: images.comida3, alt: "Especialidad gastronómica de El Patio", category: "Nuestra cocina" },
  { src: images.comida4, alt: "Detalle de uno de los platos", category: "Gastronomía" },
  { src: images.exterior2, alt: "Exterior del restaurante El Patio", category: "El restaurante" },
  { src: images.comida5, alt: "Plato de la selección gastronómica", category: "Nuestra cocina" },
  { src: images.comida6, alt: "Otra propuesta de la cocina", category: "Gastronomía" },
  { src: images.comida7, alt: "Detalle de la oferta gastronómica", category: "Nuestra cocina" },
  { src: images.comida8, alt: "Fotografía adicional de la comida", category: "Gastronomía" },
  { src: images.exterior3, alt: "Otra vista del exterior de El Patio", category: "El restaurante" },
];

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Restaurante+El+Patio+Rivas-Vaciamadrid";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        SABOR, CERCANÍA Y BUENA MESA EN RIVAS-VACIAMADRID
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="El Patio, inicio">
          <span className="brand-symbol"><UtensilsCrossed size={24} /></span>
          <span className="brand-copy">
            <span className="brand-name">EL PATIO</span>
            <span className="brand-subtitle">RESTAURANTE · RIVAS</span>
          </span>
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          <a href="#historia" onClick={closeMenu}>El restaurante</a>
          <a href="#cocina" onClick={closeMenu}>Nuestra cocina</a>
          <a href="#galeria" onClick={closeMenu}>Galería</a>
          <a href="#contacto" onClick={closeMenu}>Contacto</a>
          <a className="nav-cta" href={mapsUrl} target="_blank" rel="noreferrer">
            Cómo llegar <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <img
          className="hero-image"
          src={images.exterior}
          alt="Exterior del restaurante El Patio en Rivas-Vaciamadrid"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">
            <span /> TU RESTAURANTE EN RIVAS
          </span>
          <h1>Donde la buena mesa<br />se siente como <em>en casa.</em></h1>
          <p>
            Un lugar para reunirse, disfrutar y compartir el placer de sentarse
            a la mesa.
          </p>
          <div className="hero-actions">
            <a href="#cocina" className="button button-primary">
              Descubre nuestra cocina <ArrowRight size={18} />
            </a>
            <a href="#contacto" className="button button-outline">
              Ven a conocernos
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={16} />
            <span>Rivas-Vaciamadrid · Madrid</span>
          </div>
        </div>
        <a className="scroll-indicator" href="#historia" aria-label="Desplazarse hacia abajo">
          <ArrowDown size={19} />
        </a>
        <div className="hero-index"><span>01</span> / EL PATIO</div>
      </section>

      <section className="intro section-pad" id="historia">
        <div className="intro-image-wrap">
          <img src={images.interior} alt="El ambiente interior de El Patio" loading="lazy" />
          <div className="image-note">
            <span className="note-icon"><UtensilsCrossed size={21} /></span>
            <span>
              <strong>Un lugar para disfrutar</strong>
              <small>Buenos momentos alrededor de la mesa</small>
            </span>
          </div>
          <span className="vertical-label">EL PATIO · RIVAS</span>
        </div>

        <div className="intro-copy">
          <span className="eyebrow"><span /> BIENVENIDOS A EL PATIO</span>
          <h2>Hay lugares a los que siempre apetece <em>volver.</em></h2>
          <div className="short-rule" />
          <p>
            Una buena comida sabe todavía mejor cuando se comparte. En El Patio
            queremos ser ese lugar donde reunirse con los tuyos, disfrutar de la
            cocina y alargar la sobremesa sin mirar el reloj.
          </p>
          <p>
            Descubre nuestro espacio, echa un vistazo a las fotografías y ven
            a conocernos en Rivas-Vaciamadrid.
          </p>
          <a className="text-link" href="#galeria">
            Explora el restaurante <ArrowRight size={17} />
          </a>
          <div className="intro-signature">
            <span className="signature-line" />
            <span>El Patio <small>· Rivas-Vaciamadrid</small></span>
          </div>
        </div>
      </section>

      <section className="kitchen section-pad" id="cocina">
        <div className="kitchen-heading">
          <div>
            <span className="eyebrow eyebrow-light"><span /> EL PLACER DE COMER BIEN</span>
            <h2>La cocina es el corazón<br />de <em>cada encuentro.</em></h2>
          </div>
          <p>
            Platos para disfrutar, momentos para recordar y la mejor excusa
            para sentarse a la mesa con quienes más quieres.
          </p>
        </div>

        <div className="kitchen-grid">
          <button className="food-card food-card-large" onClick={() => setActiveImage(images.comida1)}>
            <img src={images.comida1} alt="Fotografía gastronómica de El Patio" loading="lazy" />
            <span className="food-card-caption">
              <span><small>01 / DESCUBRE</small><strong>El placer de compartir</strong></span>
              <span className="round-arrow"><ArrowUpRight size={19} /></span>
            </span>
          </button>
          <button className="food-card" onClick={() => setActiveImage(images.comida2)}>
            <img src={images.comida2} alt="Otra fotografía de la cocina de El Patio" loading="lazy" />
            <span className="food-card-caption">
              <span><small>02 / SABORES</small><strong>Momentos alrededor de la mesa</strong></span>
              <span className="round-arrow"><ArrowUpRight size={19} /></span>
            </span>
          </button>
        </div>
        <p className="kitchen-footnote">
          <UtensilsCrossed size={15} /> La mejor receta: buena compañía.
        </p>
      </section>

      <section className="gallery section-pad" id="galeria">
        <div className="section-heading">
          <div>
            <span className="eyebrow"><span /> UNA MIRADA A EL PATIO</span>
            <h2>Un lugar que entra<br />por los ojos y <em>se disfruta.</em></h2>
          </div>
          <p>
            Un vistazo a nuestro espacio y a los platos que forman parte
            de la experiencia de El Patio.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <button
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.src}
              onClick={() => setActiveImage(item.src)}
              aria-label={`Ampliar fotografía: ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-overlay">
                <span>{item.category}</span>
                <span className="gallery-plus">+</span>
              </span>
            </button>
          ))}
        </div>
        <div className="gallery-bottom">
          <span>EL PATIO · RIVAS-VACIAMADRID</span>
          <span>BUENA MESA, BUENOS MOMENTOS.</span>
        </div>
      </section>

      <section className="visit section-pad" id="contacto">
        <div className="visit-copy">
          <span className="eyebrow eyebrow-light"><span /> ESTAMOS EN RIVAS</span>
          <h2>Tu próxima buena comida<br />puede empezar <em>aquí.</em></h2>
          <p>
            Ven a descubrir El Patio. Consulta nuestra ubicación y prepara
            tu próxima visita.
          </p>
          <a href={mapsUrl} className="button button-cream" target="_blank" rel="noreferrer">
            Ver ubicación en Google Maps <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="visit-card">
          <div className="visit-card-icon"><MapPin size={23} /></div>
          <span className="visit-card-label">DÓNDE ENCONTRARNOS</span>
          <h3>El Patio</h3>
          <p>Rivas-Vaciamadrid, Madrid</p>
          <a className="text-link text-link-light" href={mapsUrl} target="_blank" rel="noreferrer">
            Abrir indicaciones <ArrowRight size={17} />
          </a>
          <div className="visit-divider" />
          <span className="visit-card-label">VEN A DISFRUTAR</span>
          <p>Te esperamos para compartir buenos momentos.</p>
        </div>
      </section>

      <footer className="footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-symbol"><UtensilsCrossed size={23} /></span>
          <span className="brand-copy">
            <span className="brand-name">EL PATIO</span>
            <span className="brand-subtitle">RESTAURANTE · RIVAS</span>
          </span>
        </a>
        <p>Buena mesa. Buenos momentos.</p>
        <a className="footer-top" href="#inicio">Volver arriba ↑</a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} El Patio · Rivas-Vaciamadrid</span>
          <span>Una web creada con cuidado.</span>
        </div>
      </footer>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Fotografía ampliada" onClick={() => setActiveImage(null)}>
          <button className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Cerrar fotografía">
            <X size={27} />
          </button>
          <img src={activeImage} alt="Fotografía ampliada de El Patio" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
