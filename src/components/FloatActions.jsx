import "./FloatActions.css";

export default function FloatActions({ setPage }) {

  const handleCall = () => {
    window.location.href =
      "tel:+918827771847";
  };

  const handleContact = () => {
    if (setPage) {
      setPage("Contact");
    }
  };

  return (
    <div className="float-actions">

      <button
        className="float-btn call-btn"
        onClick={handleCall}
      >
        📞
      </button>

      <button
        className="float-btn contact-btn"
        onClick={handleContact}
      >
        ✉️
      </button>

    </div>
  );
}