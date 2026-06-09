import "../css/AboutPage.css";

import {
  Eyebrow,
  BtnPrimary
} from "../components/ui";

export default function AboutPage({ setPage }) {

  return (
    <>

      {/* ABOUT HERO */}

      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          <Eyebrow>
            About Atlantic Imperial
          </Eyebrow>

          <h1 className="about-hero-title">
            Privileged Lifestyle
            <br />
            Perfect Setup
          </h1>

          <p className="about-hero-text">
            Atlantic Imperial is more than just a
            residential project. It is a thoughtfully
            crafted living experience designed for
            families seeking luxury, comfort,
            security and connectivity.
          </p>

        </div>

      </section>

      {/* INTRO SECTION */}

      <section className="about-intro">

        <div className="about-container">

          <div className="about-intro-grid">

            <div className="about-intro-image">

              <img
                src="https://raishivam-24.github.io/Atlantic_imperial/images/front_view1.jpeg"
                alt="Atlantic Imperial"
              />

            </div>

            <div className="about-intro-content">

              <Eyebrow>
                Our Vision
              </Eyebrow>

              <h2 className="about-section-title">
                Building Dreams
                <br />
                Creating Communities
              </h2>

              <div className="about-divider"></div>

              <p>
                Diwan Construction believes that
                every home should inspire happiness,
                peace and prosperity. Atlantic
                Imperial reflects that philosophy
                through elegant architecture,
                premium amenities and thoughtfully
                designed living spaces.
              </p>

              <p>
                Located in the prime area of Torwa,
                Bilaspur, the project combines
                modern convenience with natural
                surroundings to create a perfect
                lifestyle destination.
              </p>

              <BtnPrimary
                onClick={() =>
                  setPage("Projects")
                }
              >
                View Floor Plans
              </BtnPrimary>

            </div>

          </div>

        </div>

      </section>
            {/* VISION SECTION */}

      <section className="vision-section">

        <div className="about-container">

          <div className="vision-header">

            <Eyebrow center>
              Our Philosophy
            </Eyebrow>

            <h2 className="vision-title">
              A Place Where Peace
              <br />
              Meets Prosperity
            </h2>

            <div className="vision-divider"></div>

          </div>

          <div className="vision-grid">

            <div className="vision-card">

              <div className="vision-icon">
                🌿
              </div>

              <h3>
                Sustainable Living
              </h3>

              <p>
                Thoughtfully planned spaces with
                greenery, open areas and a healthy
                environment for families.
              </p>

            </div>

            <div className="vision-card">

              <div className="vision-icon">
                🏡
              </div>

              <h3>
                Modern Homes
              </h3>

              <p>
                Elegant architecture combined
                with functionality, comfort and
                premium specifications.
              </p>

            </div>

            <div className="vision-card">

              <div className="vision-icon">
                🤝
              </div>

              <h3>
                Community First
              </h3>

              <p>
                Spaces that encourage interaction,
                recreation and a strong sense of
                belonging.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* STATISTICS SECTION */}

      <section className="stats-section">

        <div className="about-container">

          <div className="stats-grid">

            <div className="stat-box">
              <h3>2/3/4</h3>
              <span>BHK Options</span>
            </div>

            <div className="stat-box">
              <h3>30+</h3>
              <span>Amenities</span>
            </div>

            <div className="stat-box">
              <h3>G+10</h3>
              <span>Floors</span>
            </div>

            <div className="stat-box">
              <h3>RERA</h3>
              <span>Registered</span>
            </div>

          </div>

        </div>

      </section>
            {/* DEVELOPER SECTION */}

      <section className="developer-section">

        <div className="about-container">

          <div className="developer-grid">

            <div className="developer-content">

              <Eyebrow>
                Developer
              </Eyebrow>

              <h2 className="about-section-title">
                Diwan Construction
              </h2>

              <div className="about-divider"></div>

              <p>
                Diwan Construction, a Vidhani Group
                venture, is committed to creating
                world-class residential spaces that
                combine quality construction,
                innovative design and long-term
                value.
              </p>

              <p>
                Atlantic Imperial represents the
                company's vision of delivering
                luxury living experiences with
                modern amenities and exceptional
                connectivity.
              </p>

            </div>

            <div className="developer-image">

              <img
                src="https://raishivam-24.github.io/Atlantic_imperial/images/atlantic_front__view.jpeg"
                alt="Developer"
              />

            </div>

          </div>

        </div>

      </section>

      {/* RERA SECTION */}

      <section className="rera-section">

        <div className="about-container">

          <div className="rera-box">

            <Eyebrow center>
              Government Approved
            </Eyebrow>

            <h2 className="rera-title">
              RERA Registered Project
            </h2>

            <div className="vision-divider"></div>

            <div className="rera-number">
              PCGRERA200923001676
            </div>

            <p className="rera-text">
              Atlantic Imperial is a registered
              project under the Chhattisgarh Real
              Estate Regulatory Authority,
              ensuring transparency and trust
              for every homeowner.
            </p>

          </div>

        </div>

      </section>

    </>
  );
}