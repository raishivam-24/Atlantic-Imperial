import T from "../tokens";

export function Eyebrow({ children, center = false }) {
  return (
    <p
      style={{
        fontFamily: "'Montserrat',sans-serif",
        fontSize: 10,
        letterSpacing: 4,
        textTransform: "uppercase",
        color: T.greenAcc,
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: center ? "center" : "flex-start",
        marginBottom: 14,
      }}
    >
      {!center && (
        <span
          style={{
            display: "block",
            width: 26,
            height: 1,
            background: T.greenAcc,
            flexShrink: 0,
          }}
        />
      )}

      {children}

      {center && (
        <span
          style={{
            display: "block",
            width: 26,
            height: 1,
            background: T.greenAcc,
            flexShrink: 0,
          }}
        />
      )}
    </p>
  );
}

export function SectionTitle({ children, center = false }) {
  return (
    <h2
      style={{
        fontFamily: "'Cormorant Garamond',serif",
        fontSize: "clamp(32px,5vw,52px)",
        fontWeight: 300,
        lineHeight: 1.15,
        color: T.textLight,
        textAlign: center ? "center" : "left",
        marginBottom: 16,
      }}
    >
      {children}
    </h2>
  );
}

export function Divider({ center = false }) {
  return (
    <div
      style={{
        width: 44,
        height: 1,
        background: T.greenAcc,
        margin: center
          ? "20px auto 28px"
          : "20px 0 28px",
      }}
    />
  );
}

export function BtnPrimary({
  children,
  onClick,
  href,
  style = {},
}) {

  const btnStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,

    background: T.greenAcc,
    color: T.bgDark,

    fontFamily: "'Montserrat',sans-serif",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "2.5px",
    textTransform: "uppercase",

    padding: "15px 34px",

    borderRadius: 2,
    border: "none",

    cursor: "pointer",

    transition: "all .25s",

    textDecoration: "none",

    ...style,
  };

  if (href) {
    return (
      <a
        href={href}
        style={btnStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={btnStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function BtnOutline({
  children,
  onClick,
  href,
  style = {},
}) {

  const btnStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,

    background: "transparent",
    color: T.greenPale,

    fontFamily: "'Montserrat',sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "2.5px",
    textTransform: "uppercase",

    padding: "14px 34px",

    borderRadius: 2,
    border: `1.5px solid ${T.greenAcc}`,

    cursor: "pointer",

    transition: "all .25s",

    textDecoration: "none",

    ...style,
  };

  if (href) {
    return (
      <a
        href={href}
        style={btnStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={btnStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}