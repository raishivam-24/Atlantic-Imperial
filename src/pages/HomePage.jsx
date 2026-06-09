import { useState, useEffect } from "react";
import "../css/HomePage.css";

import {
  Eyebrow,
  BtnPrimary,
  BtnOutline
} from "../components/ui";

// ── Hero Slider Data ──────────────────────────────────────────────────────────
const SLIDES = [
  {
    bg: "https://raishivam-24.github.io/Atlantic_imperial/images/front_view1.jpeg",
    eyebrow: "Diwan Construction · A Vidhani Group Venture",
    heading: <>Atlantic<br /><em>Imperial</em></>,
    sub: "Imperial Towers · Torwa, Bilaspur",
    tagline: "Step into your dream community",
    cta1: { label: "Explore Homes",    page: "Projects" },
    cta2: { label: "Book a Site Visit", page: "Contact"  },
  },
  {
    bg: "https://raishivam-24.github.io/Atlantic_imperial/images/Front_View2.jpeg",
    eyebrow: "Atlantic Imperial · Bilaspur",
    heading: <>Luxury in the<br /><em>Heart of the City</em></>,
    sub: "Torwa, Bilaspur · Chhattisgarh",
    tagline: "Experience the perfect blend of comfort and elegance.",
    cta1: { label: "Contact Us", page: "Contact" },
    cta2: null,
  },
  {
    bg: "https://raishivam-24.github.io/Atlantic_imperial/images/courtyard.jpg",
    eyebrow: "World-Class Amenities",
    heading: <>World-Class<br /><em>Amenities</em></>,
    sub: "30+ Premium Amenities",
    tagline: "Clubhouse, Gym, Garden, and much more.",
    cta1: { label: "Explore Projects", page: "Projects" },
    cta2: null,
  },
];

// ── Gallery Images ─────────────────────────────────────────────────────────────
const GALLERY = [
  { src: "https://raishivam-24.github.io/Atlantic_imperial/images/atlantic_front__view.jpeg", alt: "Front View"      },
  { src: "https://raishivam-24.github.io/Atlantic_imperial/images/courtyard.jpg",             alt: "Courtyard"       },
  { src: "https://raishivam-24.github.io/Atlantic_imperial/images/swimming_pool.jpeg",        alt: "Swimming Pool"   },
  { src: "https://raishivam-24.github.io/Atlantic_imperial/images/banquet.jpeg",              alt: "Majestic Banquet"},
  { src: "https://raishivam-24.github.io/Atlantic_imperial/images/fitness.jpeg",              alt: "Fitness Center"  },
  { src: "https://raishivam-24.github.io/Atlantic_imperial/images/kids_zone.jpeg",            alt: "Kids Game Zone"  },
];

// ── FAQ Data ───────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "When is the possession date for Atlantic Imperial?",
    a: "The possession date is scheduled for December 2026.",
  },
  {
    q: "Is the project RERA approved?",
    a: "Yes. RERA Registration No: PCGRERA200923001676, Bilaspur, Chhattisgarh.",
  },
  {
    q: "Do you provide loan assistance?",
    a: "Yes, we have tie-ups with leading banks and NBFCs to assist you with home loan processing.",
  },
];

// ── Stats ──────────────────────────────────────────────────────────────────────
const STATS = [
  { num: "2/3/4", lbl: "BHK Options" },
  { num: "30+",   lbl: "Amenities"   },
  { num: "G+10",  lbl: "Floors"      },
  { num: "RERA",  lbl: "Registered"  },
];

// ── Highlights ─────────────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  { icon: "🏡", title: "Luxury Living",      text: "Elegant residences designed with spacious layouts, premium finishes and vastu compliant planning." },
  { icon: "🌿", title: "Green Surroundings", text: "Landscaped courtyards, jogging tracks, terrace gazebo and open green spaces all around."          },
  { icon: "📍", title: "Prime Location",     text: "Located near Gurunanak Chowk, schools, hospitals, markets and railway station."                    },
  { icon: "🛡️", title: "Safe & Secure",      text: "CCTV surveillance, smart locks, video doorbell and 24×7 security services."                       },
];

// ── Floor Plans ────────────────────────────────────────────────────────────────
const PLANS = [
  { img: "2bhk.png", label: "2 BHK", area: "972.4 Sq.ft"  },
  { img: "3bhk.png", label: "3 BHK", area: "1230 Sq.ft"   },
  { img: "4bhk.png", label: "4 BHK", area: "1436.4 Sq.ft" },
];

// ── Amenities ──────────────────────────────────────────────────────────────────
const AMENITIES = [
  "🏊 Swimming Pool", "💪 Fitness Center",      "🌳 Landscaped Courtyard",
  "🎭 Open Air Theater", "🧒 Kids Play Area",   "🛡️ 24×7 Security",
  "🎉 Party Lawn",       "🚶 Jogging Track",
];

// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage({ setPage }) {

  /* Slider */
  const [slide, setSlide]         = useState(0);
  const [slideAnim, setSlideAnim] = useState(true);

  const goSlide = (idx) => {
    setSlideAnim(false);
    setTimeout(() => { setSlide(idx); setSlideAnim(true); }, 80);
  };

  useEffect(() => {
    const t = setInterval(() =>
      goSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prevSlide = () => goSlide((slide - 1 + SLIDES.length) % SLIDES.length);
  const nextSlide = () => goSlide((slide + 1) % SLIDES.length);

  const s = SLIDES[slide];

  /* Gallery lightbox */
  const [lightbox, setLightbox] = useState(null);

  /* FAQ */
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ══════════════════════════════════════
          HERO SLIDER
      ══════════════════════════════════════ */}
      <section
        className="hero-section"
        style={{
          background: `linear-gradient(135deg,rgba(11,26,14,.92) 0%,rgba(27,67,50,.72) 50%,rgba(11,26,14,.88) 100%),url("${s.bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay" />

        {/* Arrows */}
        <button className="slider-arrow slider-arrow--left"  onClick={prevSlide} aria-label="Previous slide">&#8249;</button>
        <button className="slider-arrow slider-arrow--right" onClick={nextSlide} aria-label="Next slide">&#8250;</button>

        {/* Dots */}
        <div className="slider-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === slide ? " slider-dot--active" : ""}`}
              onClick={() => goSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className={`hero-content${slideAnim ? "" : " hero-content--hidden"}`}>
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h1 className="hero-title fade-up">{s.heading}</h1>
          <p className="hero-location fade-up-d1">{s.sub}</p>
          <p className="hero-tagline fade-up-d2">{s.tagline}</p>
          <div className="hero-buttons fade-up-d3">
            {s.cta1 && <BtnPrimary onClick={() => setPage(s.cta1.page)}>{s.cta1.label}</BtnPrimary>}
            {s.cta2 && <BtnOutline onClick={() => setPage(s.cta2.page)}>{s.cta2.label}</BtnOutline>}
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {STATS.map((item) => (
            <div key={item.lbl} className="hero-stat">
              <div className="hero-stat-number">{item.num}</div>
              <div className="hero-stat-label">{item.lbl}</div>
            </div>
          ))}
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HIGHLIGHTS
      ══════════════════════════════════════ */}
      <section className="highlights-section">
        <div className="section-container">
          <div className="section-header">
            <Eyebrow center>Why Atlantic Imperial</Eyebrow>
            <h2 className="section-title-center">Luxury Meets<br />Nature</h2>
            <div className="center-divider" />
          </div>
          <div className="highlights-grid">
            {HIGHLIGHTS.map((c) => (
              <div key={c.title} className="highlight-card">
                <div className="highlight-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT PREVIEW
      ══════════════════════════════════════ */}
      <section className="about-preview">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://raishivam-24.github.io/Atlantic_imperial/images/front_view1.jpeg" alt="Atlantic Imperial" />
            </div>
            <div className="about-content">
              <Eyebrow>About Atlantic Imperial</Eyebrow>
              <h2 className="about-title">Privileged Lifestyle<br />Perfect Setup</h2>
              <div className="about-divider" />
              <p className="about-text">
                Come home to your dream community and bloom in the new era of luxury living.
                Atlantic Imperial is located in the most exclusive locality of Torwa, Bilaspur.
              </p>
              <p className="about-text">
                A spectacular gated community offering elegant 2, 3 and 4 BHK residences,
                premium amenities and plentiful leisure spaces.
              </p>
              <BtnPrimary onClick={() => setPage("About")}>Discover More</BtnPrimary>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJECTS PREVIEW
      ══════════════════════════════════════ */}
      <section className="projects-preview">
        <div className="section-container">
          <div className="section-header">
            <Eyebrow center>Floor Plans</Eyebrow>
            <h2 className="section-title-center">Thoughtfully Designed<br />Living Spaces</h2>
            <div className="center-divider" />
          </div>
          <div className="project-cards">
            {PLANS.map((c) => (
              <div key={c.label} className="project-card">
                <div className="project-image">
                  <img src={`https://raishivam-24.github.io/Atlantic_imperial/images/${c.img}`} alt={c.label} />
                </div>
                <div className="project-content">
                  <h3>{c.label}</h3>
                  <p>Built-up Area</p>
                  <span>{c.area}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="project-btn-wrap">
            <BtnPrimary onClick={() => setPage("Projects")}>View All Floor Plans</BtnPrimary>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AMENITIES PREVIEW
      ══════════════════════════════════════ */}
      <section className="amenities-preview">
        <div className="section-container">
          <div className="section-header">
            <Eyebrow center>World Class Amenities</Eyebrow>
            <h2 className="section-title-center">Designed For<br />Exceptional Living</h2>
            <div className="center-divider" />
          </div>
          <div className="amenities-grid">
            {AMENITIES.map((a) => (
              <div key={a} className="amenity-box">{a}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VISUAL SHOWCASE GALLERY
      ══════════════════════════════════════ */}
      <section className="showcase-section">
        <div className="section-container">
          <div className="section-header">
            <Eyebrow center>Visual Showcase</Eyebrow>
            <h2 className="section-title-center">A Glimpse of<br />Atlantic Imperial</h2>
            <div className="center-divider" />
          </div>
          <div className="showcase-grid">
            {GALLERY.map((g, i) => (
              <div key={i} className="showcase-item" onClick={() => setLightbox(g)}>
                <img src={g.src} alt={g.alt} />
                <div className="showcase-overlay">
                  <span>{g.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt} className="lightbox-img" />
          <button className="lightbox-close" onClick={() => setLightbox(null)}>&#x2715;</button>
        </div>
      )}

      {/* ══════════════════════════════════════
          FAQ SECTION
      ══════════════════════════════════════ */}
      <section className="faq-section">
        <div className="section-container">
          <div className="section-header">
            <Eyebrow center>Got Questions?</Eyebrow>
            <h2 className="section-title-center">Frequently Asked<br />Questions</h2>
            <div className="center-divider" />
          </div>

          <div className="faq-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? " faq-item--open" : ""}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-icon">{openFaq === i ? "×" : "∨"}</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>

          {/* Download / View Brochure */}
          <div className="brochure-section">
            <Eyebrow center>Project Details</Eyebrow>
            <h2 className="section-title-center brochure-title">Download Project Details</h2>
            <div className="brochure-buttons">
              <a
                href="brochure/atlantic-imperial-brochure.pdf"
                download
                className="brochure-btn brochure-btn--outline"
              >
                <span>📄</span> Download Brochure
              </a>
              <a
                href="brochure/atlantic-imperial-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="brochure-btn brochure-btn--solid"
              >
                <span>👁️</span> View Brochure
              </a>
            </div>
            <p className="brochure-note">PDF · Atlantic Imperial · Diwan Construction</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════ */}
      <section className="home-cta">
        <div className="cta-content">
          <Eyebrow center>Atlantic Imperial</Eyebrow>
          <h2 className="cta-title">Book Your Dream Home<br />Today</h2>
          <p className="cta-text">
            Experience luxury, comfort and convenience in the heart of Bilaspur.
            Schedule your site visit and discover your future home.
          </p>
          <div className="cta-buttons">
            <BtnPrimary onClick={() => setPage("Contact")}>Book Site Visit</BtnPrimary>
            <BtnOutline onClick={() => setPage("Projects")}>Explore Plans</BtnOutline>
          </div>
        </div>
      </section>
    </>
  );
}