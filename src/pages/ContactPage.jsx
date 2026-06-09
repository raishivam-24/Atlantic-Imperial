import { useState } from "react";

import "../css/ContactPage.css";

import {
  Eyebrow,
  BtnPrimary
} from "../components/ui";

export default function ContactPage() {

  const [formData, setFormData] =
    useState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you! Our team will contact you soon."
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>

      {/* CONTACT HERO */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <Eyebrow>
            Get In Touch
          </Eyebrow>

          <h1 className="contact-hero-title">
            Book Your
            <br />
            Dream Home
          </h1>

          <p className="contact-hero-text">
            We would love to help you find
            the perfect home. Connect with
            our team and schedule your
            site visit today.
          </p>

        </div>

      </section>

      {/* CONTACT INFO */}

      <section className="contact-info-section">

        <div className="contact-container">

          <div className="contact-grid">

            <div className="contact-details">

              <Eyebrow>
                Contact Details
              </Eyebrow>

              <h2 className="contact-title">
                Atlantic Imperial
              </h2>

              <div className="contact-divider"></div>

              <div className="contact-item">

                <h3>📍 Address</h3>

                <p>
                  Gurunanak Chowk,
                  Main Road Torwa,
                  Bilaspur (CG)
                </p>

              </div>

              <div className="contact-item">

                <h3>📞 Phone</h3>

                <p>
                  +91 882 777 1847
                </p>

                <p>
                  +91 882 777 1849
                </p>

              </div>

              <div className="contact-item">

                <h3>🏢 Developer</h3>

                <p>
                  Diwan Construction
                </p>

              </div>

              <div className="contact-item">

                <h3>📋 RERA</h3>

                <p>
                  PCGRERA200923001676
                </p>

              </div>

            </div>

            <div className="contact-form-wrap">

              <Eyebrow>
                Enquiry Form
              </Eyebrow>

              <h2 className="contact-title">
                Schedule A Visit
              </h2>

              <div className="contact-divider"></div>

              <form
                onSubmit={handleSubmit}
                className="contact-form"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                />

                <BtnPrimary>
                  Send Enquiry
                </BtnPrimary>

              </form>

            </div>

          </div>

        </div>

      </section>
            {/* LOCATION SECTION */}

      <section className="location-section">

        <div className="contact-container">

          <div className="location-header">

            <Eyebrow center>
              Project Location
            </Eyebrow>

            <h2 className="location-title">
              Visit Atlantic Imperial
            </h2>

            <div className="contact-divider location-divider"></div>

          </div>

          <div className="map-wrapper">

            <iframe
              title="Atlantic Imperial Location"
              src="https://www.google.com/maps?q=Torwa%20Bilaspur%20Chhattisgarh&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="contact-cta">

        <div className="contact-cta-content">

          <Eyebrow center>
            Atlantic Imperial
          </Eyebrow>

          <h2 className="contact-cta-title">
            Ready To Find
            <br />
            Your Dream Home?
          </h2>

          <p className="contact-cta-text">
            Schedule a site visit today and
            experience premium living at
            Atlantic Imperial. Our team is
            ready to assist you.
          </p>

          <div className="contact-cta-buttons">

            <BtnPrimary>
              Call Now
            </BtnPrimary>

          </div>

        </div>

      </section>

    </>
  );
}