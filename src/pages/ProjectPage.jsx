// import { useState } from "react";

// import "../css/ProjectPage.css";

// import {
//   Eyebrow,
//   BtnPrimary
// } from "../components/ui";

// export default function ProjectsPage() {

//   const [activePlan, setActivePlan] =
//     useState("4bhk");

//   return (
//     <>

//       {/* PROJECT HERO */}

//       <section className="projects-hero">

//         <div className="projects-hero-content">

//           <Eyebrow>
//             Atlantic Imperial
//           </Eyebrow>

//           <h1 className="projects-hero-title">
//             Thoughtfully Designed
//             <br />
//             Living Spaces
//           </h1>

//           <p className="projects-hero-text">
//             Discover our range of elegant
//             2, 3 and 4 BHK residences,
//             carefully planned to maximize
//             comfort, functionality and luxury.
//           </p>

//         </div>

//       </section>

//       {/* FLOOR PLANS */}

//       <section className="floor-plans">

//         <div className="projects-container">

//           <div className="plans-header">

//             <Eyebrow center>
//               Floor Plans
//             </Eyebrow>

//             <h2 className="plans-title">
//               Choose Your
//               <br />
//               Perfect Home
//             </h2>

//             <div className="plans-divider"></div>

//           </div>

//           <div className="plan-tabs">

//             <button
//               className={
//                 activePlan === "4bhk"
//                   ? "active"
//                   : ""
//               }
//               onClick={() =>
//                 setActivePlan("4bhk")
//               }
//             >
//               4 BHK
//             </button>

//             <button
//               className={
//                 activePlan === "3bhk"
//                   ? "active"
//                   : ""
//               }
//               onClick={() =>
//                 setActivePlan("3bhk")
//               }
//             >
//               3 BHK
//             </button>

//             <button
//               className={
//                 activePlan === "2bhk"
//                   ? "active"
//                   : ""
//               }
//               onClick={() =>
//                 setActivePlan("2bhk")
//               }
//             >
//               2 BHK
//             </button>

//           </div>

//           {activePlan === "4bhk" && (

//             <div className="plan-card">

//               <div className="plan-image">

//                 <img
//                   src="https://raishivam-24.github.io/Atlantic_imperial/images/4bhk.png"
//                   alt="4 BHK"
//                 />

//               </div>

//               <div className="plan-info">

//                 <h3>
//                   4 BHK Residence
//                 </h3>

//                 <p>
//                   Built-up Area
//                 </p>

//                 <span>
//                   1436.4 Sq.ft
//                 </span>

//                 <BtnPrimary>
//                   Enquire Now
//                 </BtnPrimary>

//               </div>

//             </div>

//           )}

//           {activePlan === "3bhk" && (

//             <div className="plan-card">

//               <div className="plan-image">

//                 <img
//                   src="https://raishivam-24.github.io/Atlantic_imperial/images/3bhk.png"
//                   alt="3 BHK"
//                 />

//               </div>

//               <div className="plan-info">

//                 <h3>
//                   3 BHK Residence
//                 </h3>

//                 <p>
//                   Built-up Area
//                 </p>

//                 <span>
//                   1230 Sq.ft
//                 </span>

//                 <BtnPrimary>
//                   Enquire Now
//                 </BtnPrimary>

//               </div>

//             </div>

//           )}

//           {activePlan === "2bhk" && (

//             <div className="plan-card">

//               <div className="plan-image">

//                 <img
//                   src="https://raishivam-24.github.io/Atlantic_imperial/images/2bhk.png"
//                   alt="2 BHK"
//                 />

//               </div>

//               <div className="plan-info">

//                 <h3>
//                   2 BHK Residence
//                 </h3>

//                 <p>
//                   Built-up Area
//                 </p>

//                 <span>
//                   972.4 Sq.ft
//                 </span>

//                 <BtnPrimary>
//                   Enquire Now
//                 </BtnPrimary>

//               </div>

//             </div>

//           )}
//         </div>

//       </section>
//             {/* AMENITIES SECTION */}

//       <section className="project-amenities">

//         <div className="projects-container">

//           <div className="plans-header">

//             <Eyebrow center>
//               World Class Amenities
//             </Eyebrow>

//             <h2 className="plans-title">
//               Designed For
//               <br />
//               Luxury Living
//             </h2>

//             <div className="plans-divider"></div>

//           </div>

//           <div className="amenities-grid">

//             <div className="amenity-card">
//               🏊
//               <h3>Swimming Pool</h3>
//             </div>

//             <div className="amenity-card">
//               💪
//               <h3>Fitness Center</h3>
//             </div>

//             <div className="amenity-card">
//               🌳
//               <h3>Lush Courtyard</h3>
//             </div>

//             <div className="amenity-card">
//               🎭
//               <h3>Open Air Theater</h3>
//             </div>

//             <div className="amenity-card">
//               🛝
//               <h3>Kids Play Area</h3>
//             </div>

//             <div className="amenity-card">
//               🛡️
//               <h3>24×7 Security</h3>
//             </div>

//             <div className="amenity-card">
//               🏃
//               <h3>Jogging Track</h3>
//             </div>

//             <div className="amenity-card">
//               🎉
//               <h3>Party Lawn</h3>
//             </div>

//             <div className="amenity-card">
//               🚗
//               <h3>Ample Parking</h3>
//             </div>

//             <div className="amenity-card">
//               🎮
//               <h3>Indoor Games</h3>
//             </div>

//             <div className="amenity-card">
//               🔒
//               <h3>Smart Locks</h3>
//             </div>

//             <div className="amenity-card">
//               📹
//               <h3>CCTV Surveillance</h3>
//             </div>

//           </div>

//         </div>

//       </section>
//             {/* SPECIFICATIONS SECTION */}

//       <section className="specifications-section">

//         <div className="projects-container">

//           <div className="plans-header">

//             <Eyebrow center>
//               Premium Specifications
//             </Eyebrow>

//             <h2 className="plans-title">
//               Built With
//               <br />
//               Excellence
//             </h2>

//             <div className="plans-divider"></div>

//           </div>

//           <div className="spec-grid">

//             <div className="spec-card">
//               <h3>🏗️ Structure</h3>
//               <p>
//                 Earthquake resistant RCC framed
//                 structure with quality construction.
//               </p>
//             </div>

//             <div className="spec-card">
//               <h3>⚡ Electrical</h3>
//               <p>
//                 Modular switches, concealed wiring
//                 and premium electrical fittings.
//               </p>
//             </div>

//             <div className="spec-card">
//               <h3>🚪 Doors & Windows</h3>
//               <p>
//                 Designer main door with UPVC /
//                 aluminium windows.
//               </p>
//             </div>

//             <div className="spec-card">
//               <h3>🛁 Bathrooms</h3>
//               <p>
//                 Premium sanitary ware and branded
//                 CP fittings.
//               </p>
//             </div>

//             <div className="spec-card">
//               <h3>🍳 Kitchen</h3>
//               <p>
//                 Granite platform with stainless
//                 steel sink and premium finishes.
//               </p>
//             </div>

//             <div className="spec-card">
//               <h3>🪵 Flooring</h3>
//               <p>
//                 Vitrified tiles in living and
//                 bedroom areas.
//               </p>
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* CTA SECTION */}

//       <section className="project-cta">

//         <div className="project-cta-content">

//           <Eyebrow center>
//             Atlantic Imperial
//           </Eyebrow>

//           <h2 className="project-cta-title">
//             Find Your Perfect Home
//           </h2>

//           <p className="project-cta-text">
//             Explore spacious floor plans,
//             luxury amenities and premium
//             specifications designed for
//             modern living.
//           </p>

//           <BtnPrimary>
//             Book Site Visit
//           </BtnPrimary>

//         </div>

//       </section>

//     </>
//   );
// }
import { useState } from "react";
import "../css/ProjectPage.css";
import { Eyebrow, BtnPrimary } from "../components/ui";

const BASE = "https://raishivam-24.github.io/Atlantic_imperial/images/";

const PLANS = {
  "4bhk": {
    label: "4 BHK",
    img: BASE + "4bhk.png",
    subtitle: "Block B · North Facing · Flat No. 101/201/301/401/501/601/701/801",
    builtUp: "1436.4 Sq.ft",
    sb: "1925 Sq.ft",
    features: [
      "3 Bed Rooms", "1 Puja Room", "Hall 12'×24'",
      "Kitchen 8'9\"×11'3\"", "3 Balconies (5' wide)",
      "Dress Room 7.5\"×7'0\"", "2 Toilets", "Utility 5' wide",
    ],
  },
  "3bhk": {
    label: "3 BHK",
    img: BASE + "3bhk.png",
    subtitle: "Block B · North Facing · Flat No. 102/202/302/402/502/602/702/802",
    builtUp: "1230 Sq.ft",
    sb: "1750 Sq.ft",
    features: [
      "2 Bed Rooms", "1 Puja Room", "Hall 12'×24'",
      "Kitchen 8'9\"×11'3\"", "Dress Room 6'9\"×8'0\"",
      "2 Balconies (5' wide)", "Utility 5' wide",
    ],
  },
  "2bhk": {
    label: "2 BHK",
    img: BASE + "2bhk.png",
    subtitle: "Block B · North Facing · Flat No. 104/204/304/404/504/604/704/804",
    builtUp: "972.4 Sq.ft",
    sb: "1395 Sq.ft",
    features: [
      "2 Bed Rooms", "1 Puja Room", "Hall 12'×24'",
      "Kitchen 8'9\"×11'3\"", "Balcony 5'0\"",
      "Utility 5'6\" wide", "Toilet 4'6\"×8'",
    ],
  },
};

const SPECS = [
  {
    icon: "▦",
    title: "Structure & Flooring",
    points: [
      "Seismic Zone II compliant RCC framed structure",
      "Anti-termite treatment throughout",
      "Premium vitrified tiles in living & bedrooms",
      "Anti-skid ceramic tiles in bathrooms & balconies",
    ],
  },
  {
    icon: "🍳",
    title: "Kitchen",
    points: [
      "Granite kitchen platform with SS sink",
      "Glazed tiles 2\" above platform",
      "Premium quality fittings throughout",
    ],
  },
  {
    icon: "⚡",
    title: "Electrical & Plumbing",
    points: [
      "Branded modular switches – Schneider",
      "Fire-resistant wires (Finolex/Anchor)",
      "CPVC/PPPR plumbing of reputed make",
      "All plumbing lines pressure tested",
    ],
  },
  {
    icon: "▣",
    title: "Walls",
    points: [
      "All internal walls smoothly plastered",
      "Interior — internal putty finish",
      "Exterior — external emulsion paint",
    ],
  },
  {
    icon: "🚪",
    title: "Doors & Windows",
    points: [
      "Designer main doors",
      "Flush doors as per ISI standard",
      "3-track aluminium powder-coated / UPVC windows",
      "Mosquito mesh for all windows",
    ],
  },
  {
    icon: "🛁",
    title: "Bathroom",
    points: [
      "Glazed / ceramic dado up to 7 ft height",
      "Hindware / equivalent WHB & EWC",
      "Designer Jaquar / equivalent CP fittings",
      "Hot cold water mixer for shower",
    ],
  },
  {
    icon: "🛏",
    title: "Bed Room & Living",
    points: [
      "Vitrified tiles 2'×4' flooring in all rooms",
      "Balcony ceiling in PVC",
    ],
  },
  {
    icon: "≋",
    title: "Plumbing",
    points: [
      "PVC sewer lines of reputed make",
      "All lines pressure-tested before handover",
    ],
  },
  {
    icon: "🎨",
    title: "Painting",
    points: [
      "Internal walls — premium putty + paint",
      "External walls — weather-shield emulsion",
    ],
  },
  {
    icon: "⚡",
    title: "Electrical Specifications",
    points: [
      "TV points in living room & bedroom",
      "Fire-resistant concealed wiring",
      "Power backup for common areas",
    ],
  },
];

const AMENITIES = [
  { icon: "🏊", label: "Swimming Pool" },
  { icon: "💪", label: "Fitness Center" },
  { icon: "🌳", label: "Lush Courtyard" },
  { icon: "🎭", label: "Open Air Theater" },
  { icon: "🛝", label: "Kids Play Area" },
  { icon: "🛡️", label: "24×7 Security" },
  { icon: "🏃", label: "Jogging Track" },
  { icon: "🎉", label: "Party Lawn" },
  { icon: "🚗", label: "Ample Parking" },
  { icon: "🎮", label: "Indoor Games" },
  { icon: "🔒", label: "Smart Locks" },
  { icon: "📹", label: "CCTV Surveillance" },
];

const GALLERY = [
  { src: BASE + "atlantic_front__view.jpeg", label: "Front View" },
  { src: BASE + "Front_View2.jpeg",          label: "Aerial View" },
  { src: BASE + "courtyard.jpg",             label: "Courtyard" },
  { src: BASE + "swimming_pool.jpeg",        label: "Swimming Pool" },
  { src: BASE + "banquet.jpeg",              label: "Majestic Banquet" },
  { src: BASE + "fitness.jpeg",              label: "Fitness Center" },
];

const STATS = [
  { num: "G+10", lbl: "FLOORS" },
  { num: "2/3/4", lbl: "BHK OPTIONS" },
  { num: "30+", lbl: "AMENITIES" },
  { num: "RERA", lbl: "REGISTERED" },
];

export default function ProjectsPage() {
  const [activePlan, setActivePlan] = useState("4bhk");
  const [openSpec, setOpenSpec]     = useState(null);
  const [lightbox, setLightbox]     = useState(null);

  const plan = PLANS[activePlan];

  return (
    <>
      {/* ── HERO ── */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <p className="hero-eyebrow-gold">PREMIUM RESIDENTIAL APARTMENTS</p>
          <h1 className="projects-hero-title">Atlantic Imperial</h1>
          <div className="hero-meta-row">
            <span>📍 TORWA, BILASPUR</span>
            <span className="hero-meta-sep">|</span>
            <span>🏛 G+10 FLOORS</span>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW + STATS ── */}
      <section className="proj-overview">
        <div className="projects-container">
          <div className="overview-two-col">
            <div className="overview-left">
              <h2 className="overview-heading">A Sanctuary of Sophistication</h2>
              <p className="overview-body">
                Atlantic Imperial is a spectacular gated community offering elegant 2, 3 &amp; 4
                BHK residences in the most exclusive locality of Torwa, Bilaspur — with excellent
                connectivity to vibrant work &amp; lifestyle experiences. A perfect blend of
                Luxury &amp; Lifestyle — an amalgamation of Peace &amp; Prosperity.
              </p>

              <div className="rera-box">
                <span className="rera-star">✺</span>
                <div>
                  <div className="rera-label">RERA REGISTRATION NUMBER</div>
                  <div className="rera-val">PCGRERA200923001676</div>
                </div>
              </div>

              <div className="proj-stats-strip">
                {STATS.map((s, i) => (
                  <div className="proj-stat" key={i}>
                    <span className="proj-stat-num">{s.num}</span>
                    <span className="proj-stat-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overview-right">
              <img
                src={BASE + "Front_View2.jpeg"}
                alt="Atlantic Imperial"
                className="overview-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOOR PLANS ── */}
      <section className="floor-plans">
        <div className="projects-container">
          <div className="plans-header">
            <Eyebrow center>Floor Plans</Eyebrow>
            <h2 className="plans-title">
              Choose Your<br />Perfect Home
            </h2>
            <div className="plans-divider" />
          </div>

          <div className="plan-tabs">
            {Object.entries(PLANS).map(([key, val]) => (
              <button
                key={key}
                className={activePlan === key ? "active" : ""}
                onClick={() => setActivePlan(key)}
              >
                {val.label}
              </button>
            ))}
          </div>

          <div className="plan-card">
            <div className="plan-image">
              <img src={plan.img} alt={plan.label} />
            </div>
            <div className="plan-info">
              <h3>{plan.label} Residence</h3>
              <p className="plan-sub">{plan.subtitle}</p>
              <div className="plan-areas-row">
                <div className="plan-area-item">
                  <span className="plan-area-num">{plan.builtUp}</span>
                  <span className="plan-area-lbl">Built-up Area</span>
                </div>
                <div className="plan-area-divider" />
                <div className="plan-area-item">
                  <span className="plan-area-num">{plan.sb}</span>
                  <span className="plan-area-lbl">S/B Area</span>
                </div>
              </div>
              <ul className="plan-feature-list">
                {plan.features.map((f, i) => (
                  <li key={i}><span className="plan-tick">✓</span>{f}</li>
                ))}
              </ul>
              <div className="plan-btns-row">
                <button className="plan-btn-gold">View 3D Model</button>
                <button className="plan-btn-outline">View 2D Model</button>
              </div>
              <BtnPrimary>Enquire Now</BtnPrimary>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="project-amenities">
        <div className="projects-container">
          <div className="plans-header">
            <Eyebrow center>Lifestyle</Eyebrow>
            <h2 className="plans-title">
              World-Class Amenities
            </h2>
            <div className="plans-divider" />
          </div>

          <div className="amenities-grid">
            {AMENITIES.map((a, i) => (
              <div className="amenity-card" key={i}>
                <div className="amenity-icon-circle">{a.icon}</div>
                <h3>{a.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="proj-gallery-section">
        <div className="projects-container">
          <div className="plans-header">
            <Eyebrow center>Gallery</Eyebrow>
            <h2 className="plans-title">Visual Tour</h2>
            <div className="plans-divider" />
          </div>

          <div className="proj-gallery-grid">
            {GALLERY.map((g, i) => (
              <div
                className="proj-gallery-item"
                key={i}
                onClick={() => setLightbox(g.src)}
              >
                <img src={g.src} alt={g.label} />
                <div className="proj-gallery-overlay">
                  <span>{g.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="proj-lightbox" onClick={() => setLightbox(null)}>
          <button className="proj-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* ── SPECIFICATIONS ── */}
      <section className="specifications-section">
        <div className="projects-container">
          <div className="plans-header">
            <Eyebrow center>Details</Eyebrow>
            <h2 className="plans-title">Specifications</h2>
            <div className="plans-divider" />
          </div>

          <div className="spec-accordion">
            {SPECS.map((s, i) => (
              <div
                key={i}
                className={`spec-acc-item${openSpec === i ? " open" : ""}`}
              >
                <button
                  className="spec-acc-trigger"
                  onClick={() => setOpenSpec(openSpec === i ? null : i)}
                >
                  <span className="spec-acc-icon">{s.icon}</span>
                  <span className="spec-acc-title">{s.title}</span>
                  <span className="spec-acc-chevron">
                    {openSpec === i ? "∧" : "∨"}
                  </span>
                </button>
                {openSpec === i && (
                  <ul className="spec-acc-body">
                    {s.points.map((p, j) => (
                      <li key={j}>
                        <span className="spec-acc-check">✓</span> {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / GET IN TOUCH ── */}
      <section className="project-cta">
        <div className="project-cta-content">
          <div className="cta-plan-btns">
            <button className="plan-btn-gold">📦 View 3D Model</button>
            <button className="plan-btn-outline">🖼 View 2D Model</button>
          </div>

          <h2 className="project-cta-title">Interested? Get in Touch</h2>
          <p className="project-cta-text">Contact us for bookings and inquiries.</p>

          <a href="tel:8827771847" className="cta-phone-pill">
            📞 &nbsp;882 777 1847
          </a>
        </div>
      </section>
    </>
  );
}