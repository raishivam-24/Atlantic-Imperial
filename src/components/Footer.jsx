import "./Footer.css";

export default function Footer({ setPage }) {

  const goTo = (page) => {
    if (setPage) {
      setPage(page);
    }
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2 className="footer-logo">
            Atlantic Imperial
          </h2>

          <p className="footer-tagline">
            Step into your dream community
          </p>

          <p className="footer-description">
            A premium residential development by
            Diwan Construction offering luxury,
            comfort, security and a modern lifestyle
            in the heart of Bilaspur.
          </p>

        </div>

        <div className="footer-links">

          <h4>Quick Links</h4>

          <button onClick={() => goTo("Home")}>
            Home
          </button>

          <button onClick={() => goTo("About")}>
            About
          </button>

          <button onClick={() => goTo("Projects")}>
            Projects
          </button>

          <button onClick={() => goTo("Contact")}>
            Contact
          </button>

        </div>

        <div className="footer-contact">

          <h4>Contact Info</h4>

          <p>
            Gurunanak Chowk,
            Main Road Torwa,
            Bilaspur (CG)
          </p>

          <p>
            +91 882 777 1847
          </p>

          <p>
            +91 882 777 1849
          </p>

          <p>
            info@atlanticimperial.com
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2024 Atlantic Imperial.
          All Rights Reserved.
        </p>

        <p>
          RERA:
          PCGRERA200923001676
        </p>

      </div>

    </footer>
  );
}